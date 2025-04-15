import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroPecaService } from './cadastro-peca.service';
import { Peca } from './PecaInterface';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoSnackBarComponent } from '../snack-bar/info-snack-bar/info-snack-bar.component';
import { WarnSnackBarComponent } from '../snack-bar/warn-snack-bar/warn-snack-bar.component';
import { debounceTime, distinct, distinctUntilChanged, filter, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-cadastro-peca',
  templateUrl: './cadastro-peca.component.html',
  styleUrl: './cadastro-peca.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CadastroPecaComponent {
  cadastroForm: FormGroup;
  searchControl = new FormControl('');
  pecasFiltradas$: any;
  private pesquisa = new Subject<string>();
  idPecaSelecionada: number[] = [];
  pecasSelecionadas: Peca[] = [];
  pecasIdsSelecionadas: number[] = [];

  constructor(private fb: FormBuilder,
    private _service: CadastroPecaService,
    public matDialogRef: MatDialogRef<CadastroPecaComponent>,
    private snackBar: MatSnackBar
  ) {
    this.cadastroForm = fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      cor: ['', Validators.required],
      grau_Importancia: ['', Validators.required],
      compatibilidade: (''),
      localizacao: ['', Validators.required]
    });

    this.pecasFiltradas$ = this.pesquisa.pipe (
      filter(value => value.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => this._service.pesquisarPecas(searchTerm))
    );

    this.searchControl.valueChanges.subscribe(value => {
      if (typeof value == 'string') {
        this.pesquisa.next(value);
      }
    })
  }

  pecaSelecionada(peca: Peca) {
    if (peca && !this.pecasIdsSelecionadas.includes(peca.id)) {
      if (!this.pecasSelecionadas) this.pecasSelecionadas = [];
      if (!this.pecasIdsSelecionadas) this.pecasIdsSelecionadas = [];

      this.pecasSelecionadas.push(peca);
      this.pecasIdsSelecionadas.push(peca.id);
    }
  }

  createPeca(): void {
    const peca: Peca = this.cadastroForm.value;
    peca.idsCompatibilidades = [];



    peca.idsCompatibilidades = this.pecasIdsSelecionadas;
    this._service.postCreatePeca(peca).subscribe({
      next: (response) => {
        this.matDialogRef.close();
        this.snackBar.openFromComponent(InfoSnackBarComponent, {
          duration: 4000,
          horizontalPosition:'center',
          verticalPosition: 'bottom',
          data: {text:'Peça cadastrada!'}
        })
        this.matDialogRef.close();
      },
      error: (error) => {
        const errorMessage = error?.error?.message?.message || 'Erro desconhecido ao cadastrar a peça.';
        this.snackBar.openFromComponent(WarnSnackBarComponent, {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          data: { text: errorMessage }
        });
        this.matDialogRef.close();
      }
    })

  }

}
