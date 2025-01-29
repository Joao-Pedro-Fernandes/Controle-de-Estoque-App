import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroPecaService } from './cadastro-peca.service';
import { Peca } from './PecaInterface';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoSnackBarComponent } from '../snack-bar/info-snack-bar/info-snack-bar.component';
import { WarnSnackBarComponent } from '../snack-bar/warn-snack-bar/warn-snack-bar.component';

@Component({
  selector: 'app-cadastro-peca',
  templateUrl: './cadastro-peca.component.html',
  styleUrl: './cadastro-peca.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CadastroPecaComponent {
  cadastroForm: FormGroup;

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
      quantidade_Estoque: ['', Validators.required],
      localizacao: ['', Validators.required]
    })
  }

  createPeca(): void {
    const peca: Peca = this.cadastroForm.value;
    this._service.postCreatePeca(peca).subscribe({
      next: (response) => {
        this.matDialogRef.close();
        this.snackBar.openFromComponent(InfoSnackBarComponent, {
          duration: 4000,
          horizontalPosition:'center',
          verticalPosition: 'bottom',
          data: {text:'Peça cadastrada!'}
        })
      },
      error: (error) => {
        const errorMessage = error?.error?.message?.message || 'Erro desconhecido ao cadastrar a peça.';
        this.snackBar.openFromComponent(WarnSnackBarComponent, {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          data: { text: errorMessage }
        });
      }
    })
  }

}
