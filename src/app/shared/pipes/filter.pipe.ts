import { Pipe } from '@angular/core';
@Pipe({
  name: 'filter'
  // pure: false
})
export class FilterPipe {
  transform(value: any[], filterBy: string) {
    console.log('vale', value, filterBy);
	  if (Array.isArray(value) && filterBy) {
      if(filterBy === 'shared'){
        return value.filter(file => file.SharedWithYou === "true");
      } else if(filterBy === 'owned'){
        let filtered = value.filter(file => file.SharedWithYou === "false");
        // console.log('filtered', filtered);
        return filtered;
      }
	  }
	  return value;
  }
}
