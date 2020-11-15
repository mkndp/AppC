import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipDirective } from './directives/tooltip.directive';
import { VCardComponent } from './Components/vcard/vcard.component';
import { FFooter, FHeader } from './Components/Shared';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ConferenceapiService } from './services/conferenceapi.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './Components/detail/detail.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};
@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    FHeader,
    FFooter,
    VCardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,

   // PerfectScrollbarModule,
    NgbModule,

  ],
  providers: [
    
    //{ provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }

 /// {provide: APP_BASE_HREF, useValue: '/myapp'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
