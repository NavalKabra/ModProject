import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToWords',
  pure: true
})
export class PipeWordsPipe implements PipeTransform {
  transform(value: number): string {
    const words: string[] = [
      'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const tens: string[] = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (value < 20) {
      return words[value];
    }

    if (value < 100) {
      const ten = Math.floor(value / 10);
      const unit = value % 10;
      return tens[ten] + (unit ? '-' + words[unit] : '');
    }

    if (value < 1000) {
      const hundred = Math.floor(value / 100);
      const remainder = value % 100;
      return words[hundred] + ' hundred' + (remainder ? ' and ' + this.transform(remainder) : '');
    }

    if (value < 1000000) {
      const thousand = Math.floor(value / 1000);
      const remainder = value % 1000;
      return this.transform(thousand) + ' thousand' + (remainder ? ', ' + this.transform(remainder) : '');
    }

    return value.toString();
  }
}
  
