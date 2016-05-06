import { Pipe } from '@angular/core';

@Pipe({ name: 'makeDate' })
export class DateObject {

  transform(value: any) {
	  if (value) {
        let dateObj = new Date(value);
        console.log('dateObj', dateObj);
      	return dateObj;
	  }
	  return value;
  }

}
