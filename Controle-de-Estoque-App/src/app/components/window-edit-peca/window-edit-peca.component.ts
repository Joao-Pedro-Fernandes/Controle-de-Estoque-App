import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WindowEditPecaService } from './window-edit-peca.service';
import { Peca } from '../cadastro-peca/PecaInterface';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { InfoSnackBarComponent } from '../snack-bar/info-snack-bar/info-snack-bar.component';
import { WindowConfirmationComponent } from '../util/window-confirmation/window-confirmation.component';
import { WarnSnackBarComponent } from '../snack-bar/warn-snack-bar/warn-snack-bar.component';

@Component({
  selector: 'app-window-edit-peca',
  templateUrl: './window-edit-peca.component.html',
  styleUrl: './window-edit-peca.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class WindowEditPecaComponent {
  @ViewChild('marcaInput') marcaInput!: ElementRef;
  public editForm: FormGroup;

  constructor(private fb: FormBuilder,
    public matDialogRef: MatDialogRef<WindowEditPecaComponent>,
    public dialogConfirm: MatDialog,
    private _service: WindowEditPecaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
   ) {
    this.editForm = fb.group(
      {
        id: [data.id],
        marca: [data.marca, Validators.required],
        modelo: [data.modelo, Validators.required],
        cor: [data.cor, Validators.required],
        grau_Importancia: [data.grau_Importancia, Validators.required],
        quantidade_Estoque: [data.quantidade_Estoque, Validators.required],
        localizacao: [data.localizacao, Validators.required]
      }
    )
   }

   public idPeca = this.data.id;

   updatePeca(): void {
    const peca: Peca = this.editForm.value;
    this.matDialogRef.close();
    this._service.updatePeca(peca).subscribe({
      next: (response) => {
        this._snackBar.openFromComponent(InfoSnackBarComponent, {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 4000,
          data: {text: 'Dados atualizados!'}
        })
      },
      error: (error) => {
        this._snackBar.openFromComponent(WarnSnackBarComponent, {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 4000,
          data: {text: error.error.message}
        })
      }
    })
   }

   deletePeca(): void {

    if (this.idPeca != null)
    {
      const dialogCofirm = this.dialogConfirm.open(WindowConfirmationComponent, {

        panelClass: 'confirm-form-dialog',
        width: '300px',
        height: '200px'
      });

      dialogCofirm.afterClosed().subscribe(result => {

        if (result) {

          this._service.deletePeca(this.idPeca).subscribe({

            next: (response) => {
              this.matDialogRef.close();
              this._snackBar.openFromComponent(InfoSnackBarComponent, {
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                duration: 4000,
                data: {text: 'Peça deletada!'}
              })
            },

            error: (error) => {
              this.matDialogRef.close();
              this._snackBar.openFromComponent(WarnSnackBarComponent, {
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
                duration: 4000,
                data: {text: error.message}
              })
            }
          })

        } else {
          this.matDialogRef.close();
        }
      })
    }

   }




}
