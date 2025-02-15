import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piceCal'
})
export class PiceCalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.log(args);
    
    if (value <= 1000) {
      return "Low Price" + args[0]
    } else {
      return "High Price"
    }
  }

}
