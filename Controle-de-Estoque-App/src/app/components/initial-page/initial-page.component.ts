import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { InitialPageService } from './initial-page.service';
import { MatDialog } from '@angular/material/dialog';
import { CadastroPecaComponent } from '../cadastro-peca/cadastro-peca.component';
import { WindowEditPecaComponent } from '../window-edit-peca/window-edit-peca.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoSnackBarComponent } from '../snack-bar/info-snack-bar/info-snack-bar.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InitialPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'marca', 'modelo', 'cor', 'grau_Importancia', 'quantidade_Estoque', 'localizacao'];
  dataSource = new MatTableDataSource<any>();

  constructor(private initial_service: InitialPageService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.initial_service.getAllPecas().subscribe(
      (data)=> {
        this.dataSource.data = data
      },
      (error)=> {
        console.error("Erro ao carregar os dados.");
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroPecaComponent, {

      panelClass: 'cadastro-form-dialog',
      width: '500px',
      height: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe( result => {
      this.loadData();
    })

  }

  openEdit(peca: any): void {
    const dialogEditRef = this.dialog.open(WindowEditPecaComponent, {

      panelClass: 'edit-form-dialog',
      width: '500px',
      height: '600px',
      data: peca
    })

    dialogEditRef.afterClosed().subscribe( result => {
      this.loadData();
    })

  }





}
