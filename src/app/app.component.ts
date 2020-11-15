import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ResultApi } from './Models/ResultApi';
import { ConferenceapiService } from './services/conferenceapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],


})
export class AppComponent implements OnInit {
  title = 'my-app';

  data: ResultApi = null;
  tooltips: any[] = [];

  constructor(private conferenceapiService: ConferenceapiService) {


  }

  ngOnInit() {

    this.conferenceapiService.getSpeakers().subscribe(res => {
      this.data = res;
      for (let el of this.data.collection.items) {
        this.conferenceapiService.getSpeaker(el.href).subscribe(des => {

          this.tooltips.push({ href: el.href, tooltip: des });
        });

      }
    });



  }
 

}
