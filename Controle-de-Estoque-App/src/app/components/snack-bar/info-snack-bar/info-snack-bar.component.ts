import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';


@Component({
  selector: 'app-info-snack-bar',
  templateUrl: './info-snack-bar.component.html',
  styleUrl: './info-snack-bar.component.css'
})
export class InfoSnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { text: string },
   private snackBarRef: MatSnackBarRef<InfoSnackBarComponent>)
   {}

  closeSnackBar(): void {
    this.snackBarRef.dismiss();
  }

}
