import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSizePipe' })
export class FileSizePipe {

  transform(bytes:string, precision: number) {
    let value = parseInt(bytes);
    if (isNaN(value) || !isFinite(value) || bytes === '0') {
      return '';
    } else {
      precision = typeof precision === 'undefined' ? 1: precision;
      let units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
      let number = Math.floor(Math.log(value) / Math.log(1024));
      return (value / Math.pow(1024, Math.floor(number))).toFixed(precision).toString() +  ' ' + units[number];
    }
  }
}
