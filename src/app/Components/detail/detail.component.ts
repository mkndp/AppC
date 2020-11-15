import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ConferenceapiService } from 'src/app/services/conferenceapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data: any;
  hreflink: string;
  @Input('href') set href(href) {
    this.hreflink = href;

    this.conferenceapiService.getLinkdata(this.hreflink).subscribe(res => {

      this.data = res.collection.items[0].data;
      console.log(this.data);
    this.cdr.detectChanges();

    });
  }

  constructor(private conferenceapiService: ConferenceapiService,private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {


}
}
