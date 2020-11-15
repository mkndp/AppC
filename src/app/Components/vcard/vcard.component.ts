import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.scss']
})
export class VCardComponent  {

  @Input()
  expanded = false;
  isLoad = false;

  @Output()
  firstopen: EventEmitter<any> = new EventEmitter();

  constructor() { }



  expand() {


    if (!this.isLoad) {
      this.firstopen.emit();
      this.isLoad = true;
    }
    this.expanded = !this.expanded;

  }

}
