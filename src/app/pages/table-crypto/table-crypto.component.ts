import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CriptosService } from '../../services/criptos.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-crypto',
  standalone: true,
  providers: [CriptosService],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule
  ],
  templateUrl: './table-crypto.component.html',
  styleUrls: ['./table-crypto.component.css'] // Asegúrate de usar 'styleUrls' en lugar de 'styleUrl'
})
export class TableCryptoComponent implements AfterViewInit {
  displayedColumns: string[] = ["posicion", "nombre", "simbolo", "valor"];
  cargando = false;
  dataSource = new MatTableDataSource<any>(); // Inicializa dataSource aquí

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator) {
    this.dataSource.paginator = paginator;
  }
  @ViewChild(MatSort) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(private criptoService: CriptosService) {
    this.obtenerListadoCriptos();
  }

  ngAfterViewInit() {
    // Ahora puedes dejar esto vacío o realizar otras inicializaciones si es necesario
  }

  obtenerListadoCriptos() {
    this.criptoService.getCriptos().subscribe((data) => {
      this.dataSource.data = data; // Usa .data para asignar los nuevos datos
      this.cargando = false;
    });
  }
}
