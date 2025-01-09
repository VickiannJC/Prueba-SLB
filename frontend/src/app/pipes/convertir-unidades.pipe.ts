import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'convertirUnidades',
})
@Injectable({
  providedIn: 'root', // Esto permite usar el pipe como un servicio inyectable
})
export class ConvertirUnidadesPipe implements PipeTransform {
  transform(valor: number, unidad: string): string {
    if (!valor) {
      return '0';
    }

    switch (unidad) {
      case 'litros':
        return `${valor * 1000} litros`;
      case 'galones':
        return `${(valor * 0.264172).toFixed(2)} galones`;
      case 'barriles':
        return `${valor.toFixed(2)} barriles`;
      default:
        return `${valor} unidades`;
    }
  }
}
