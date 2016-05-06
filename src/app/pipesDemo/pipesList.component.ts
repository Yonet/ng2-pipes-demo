
import { Component, Input, Output, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { FilterPipe }         from './../shared/pipes/filter.pipe';
import { FileSizePipe }       from './../shared/pipes/fileSize.pipe';
import { FileExtentionPipe }  from './../shared/pipes/fileExtention.pipe';
import { SortByDirective }    from '../shared/directives/sortby.directive';
import { CapitalizePipe }     from '../shared/pipes/capitalize.pipe';
import { Sorter }             from '../shared/utils/sorter';
import { TrackByService }     from '../shared/services/trackby.service';
import { DateObject }         from './../shared/pipes/makeDate.pipe';


@Component({
  moduleId: module.id,
  selector: 'pipes-list',
  templateUrl: 'pipesList.component.html',
  directives: [ROUTER_DIRECTIVES, SortByDirective],
  pipes: [CapitalizePipe, FileExtentionPipe, FileSizePipe, FilterPipe, DateObject],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipesListComponent implements OnInit {

  @Input() files: any[] = [];
  filterBy: string;
  constructor(private sorter: Sorter, public trackby: TrackByService) { }

  ngOnInit() {
    this.filterBy = 'all';
  }

  filterChanged(value: string){
    this.filterBy = value;
    console.log(this.filterBy)
  }

  addFile(newFileName: string){
  //   let newFile = {
  //     name: newFileName,
  //     SharedWithYou: "false",
  //     fileSize: 42,
  //     modified: Date.now()
  //   };
  //
  //   this.files.push(newFile);

    let newFile = [{
      name: newFileName,
      SharedWithYou: "false",
      fileSize: 42,
      modified: Date.now()
    }];
    this.files = this.files.concat(newFile);
  }
}
