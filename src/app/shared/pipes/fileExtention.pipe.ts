import { Pipe , PipeTransform} from '@angular/core';

@Pipe({ name: 'extention' })
export class FileExtentionPipe {

  transform(value: string) {
	  if (value) {
        let extArr = value.split('.');
        let ext = extArr.length > 1 ? extArr[extArr.length - 1] : 'folder';
      	return ext;
	  }
  }
}
