import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, mode?: boolean): any {
    let defaultString: string = `${Date.prototype.getDate()}/
    ${Date.prototype.getMonth()}/
    ${Date.prototype.getFullYear()}`;
    return mode
      ? defaultString +
          ` ${Date.prototype.getHours()}:${Date.prototype.getMinutes()}`
      : defaultString;
  }
}
