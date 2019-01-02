import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timePassed'
})
export class TimePassedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = moment(value).locale('en').fromNow();
    return result
  }
}
