import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(name: string, sign: string): string {
    
    let gendervalue;
    if (sign.toUpperCase() == "M"){
      gendervalue = "Mr. " + name;
    }
    else{
      gendervalue =  "Miss. " + name;      
    }
    return gendervalue;
  }
}
