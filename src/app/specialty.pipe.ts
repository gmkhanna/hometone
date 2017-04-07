import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'specialty',
})
export class SpecialtyPipe implements PipeTransform {

  transform(value: number, desiredView) {

    if (desiredView === "kitchen"){
      console.log("in pipe");
    }
  }

}
