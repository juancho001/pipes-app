import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canflyPipe'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): string {
     return value ? 'Puede Volar' : 'No puede Volar'
  }
}
