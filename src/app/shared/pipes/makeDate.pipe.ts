import { Pipe } from '@angular/core';

@Pipe({ name: 'makeDate' })
export class DateObject {

  transform(value: any) {
	  if (value) {
        let dateObj = new Date(value);
      	return dateObj;
	  }
	  return value;
  }

}
