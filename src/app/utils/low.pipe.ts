import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'low'
})
export class LowPipe implements PipeTransform {

  transform(value: string, suffix: string): string {
    return `${value.toLocaleLowerCase()}${suffix}`;  //return value.toLocaleLowerCase() + suffix;
  }

}
