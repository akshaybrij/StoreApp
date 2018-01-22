import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternull'
})
export class FilternullPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
