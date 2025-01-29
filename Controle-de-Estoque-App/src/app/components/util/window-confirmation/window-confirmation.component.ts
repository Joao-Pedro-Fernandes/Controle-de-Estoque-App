import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-window-confirmation',
  templateUrl: './window-confirmation.component.html',
  styleUrl: './window-confirmation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class WindowConfirmationComponent {


  constructor(public matDialogRef: MatDialogRef<WindowConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {message: string}
  ) {}

  onConfirm(): void {
    this.matDialogRef.close(true);
  }

  onCancel(): void {
    this.matDialogRef.close(false);
  }

}
