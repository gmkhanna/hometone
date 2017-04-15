import { Pipe, PipeTransform } from '@angular/core';
import { Contractor } from './contractor.model';

@Pipe({
  name: 'specialty',
})
export class SpecialtyPipe implements PipeTransform {

  transform(input: Contractor[], desiredView) {
      var output: Contractor[] = [];
      if (desiredView === "1"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].specialization === "Kitchen"){
          output.push(input[i]);
        }
      }
    }
      else if (desiredView === "2") {
        for (var i = 0; i < input.length; i++){
          if (input[i].specialization === "Patio"){
            output.push(input[i]);
          }
        }
      }
      else if (desiredView === "3") {
        for (var i = 0; i < input.length; i++){
          if (input[i].specialization === "Outdoor"){
            output.push(input[i]);
          }
        }
      }
      else if (desiredView === "4"){
        for (var i = 0; i < input.length; i++){
          if (input[i].specialization === "Bathroom"){
            output.push(input[i]);
          }
        }
      }
      else {
        return input;
      }
        return output;
      }
    }
