import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { InfoSnackBarComponent } from '../info-snack-bar/info-snack-bar.component';

@Component({
  selector: 'app-warn-snack-bar',
  templateUrl: './warn-snack-bar.component.html',
  styleUrl: './warn-snack-bar.component.css'
})
export class WarnSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { text: string },
     private snackBarRef: MatSnackBarRef<InfoSnackBarComponent>)
     {}

  closeSnackBar(): void {
    this.snackBarRef.dismiss();
  }

}
