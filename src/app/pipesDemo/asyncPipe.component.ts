import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'async-pipe-example',
    template: `
    <div class="async-container container">
      <div>
        {{activity | async}}
        </div>
        <button (click)="getActivities()" class="btn btn-info">Activities</button>
    </div>
  `
})
export class AsyncPipeExample {
    activities:Observable<string>;

    constructor(){
    }

    getActivities(){
      this.activities = Observable.interval(1000)
          .map(i => this.activityFeed[i])
          .take(this.activityFeed.length);
    }

    private activityFeed = [
      'New folder created',
      'Shared with team',
      'Commented on goldengate.dwf',
      'Copied house.obj',
      'New fusion object created'
    ];

}
