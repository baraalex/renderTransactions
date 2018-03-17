import { Pipe, PipeTransform } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'appCurrency'
})
export class appCurrencyPipe implements PipeTransform {

  transform(value: any): any {
    return getCurrencySymbol(value, 'narrow');
  }

}
