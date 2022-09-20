import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameLogo'
})
export class NameLogoPipe implements PipeTransform {

  transform(value: string): string {
    const nameArray = value.split(' ');
    return `${nameArray[0].charAt(0)}${nameArray[1].charAt(0)}`;
  }

}
