import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardnumber'
})
export class CardnumberPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      const matches = value.match(/(\d|\*){4,16}/g);
      const match = matches && matches[0] || '';
      const parts = [];

      for (let i = 0, len = value.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
      }
      return parts.join(' ');
    } else {
      return null;
    }
  }
}
