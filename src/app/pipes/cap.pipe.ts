import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap',
  pure: true
})
export class CapPipe implements PipeTransform {
  transform(value: string): string {
    console.log("piceCal called");
    return value?.split(' ').map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()).join(' ');
  }
}
