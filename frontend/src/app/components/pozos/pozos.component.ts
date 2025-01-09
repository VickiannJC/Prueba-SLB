import { Component, OnInit } from '@angular/core';
import { ConvertirUnidadesPipe } from '../../pipes/convertir-unidades.pipe';
import { PozosService } from '../../services/pozos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pozos',
  imports: [CommonModule],
  templateUrl: './pozos.component.html',
  styleUrls: ['./pozos.component.css'],
})
export class PozosComponent implements OnInit {
  pozos: any[] = [];

  constructor(private pozosService: PozosService, private convertirUnidadesPipe: ConvertirUnidadesPipe) {}

  ngOnInit(): void {
    this.cargarPozos();
  }

  cargarPozos(): void {
    this.pozosService.getPozos().subscribe((data) => {
      this.pozos = data.map((pozo) => ({
        ...pozo,
        produccionConvertida: this.convertirUnidadesPipe.transform(pozo.produccionDiaria, 'litros'), // Convertimos la producción
      }));
    });
  }

  cambiarEstado(pozo: any): void {
    const nuevoEstado = pozo.estado === 'activo' ? 'inactivo' : 'activo';
    this.pozosService.updateEstado(pozo.id, nuevoEstado).subscribe(() => {
      pozo.estado = nuevoEstado;
    });
  }
}

