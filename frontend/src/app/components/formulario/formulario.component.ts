import { Component } from '@angular/core';
import { PozosService } from '../../services/pozos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  imports: [FormsModule], // Importar los módulos necesarios
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nuevoPozo = { nombre: '', ubicacion: '', produccionDiaria: null, estado: 'activo' };

  constructor(private pozosService: PozosService) {}

  agregarPozo() {
    this.pozosService.addPozo(this.nuevoPozo).subscribe(() => {
      alert('Pozo agregado con éxito');
      this.nuevoPozo = { nombre: '', ubicacion: '', produccionDiaria: null, estado: 'activo' };
    });
  }
}
