import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: string | number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
