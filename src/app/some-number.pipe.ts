import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'someNumber',
})
export class SomeNumberPipe implements PipeTransform {
  transform(value: number): number {
    console.log('pipe here');
    return value * 5;
  }
}
