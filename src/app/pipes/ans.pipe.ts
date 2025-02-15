import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ans'
})
export class AnsPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Yes" : "No";
  }

}
