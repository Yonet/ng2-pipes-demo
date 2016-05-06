import { Component, OnInit, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { PipesListComponent } from './pipesList.component';
import { ICustomer, IOrder } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'pipes',
  templateUrl: 'pipes.component.html',
  directives: [ROUTER_DIRECTIVES, PipesListComponent]
})
export class PipesComponent implements OnInit {
  title: string;
  filterBy: string;
  files: any;
  filteredfiles: any;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.title = 'Drive Files';
    this.filterBy = 'all';

    this.dataService.getFiles()
        .subscribe((files: any) => {
          this.files = this.filteredfiles = files;
          console.log('this.filteredfiles', this.filteredfiles);
        });
  }
  onFilterChanged(value:string){
    this.filterBy = value;
    console.log('filter', this.filterBy);
  }
}
