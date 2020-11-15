import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultApi } from '../Models/ResultApi';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConferenceapiService {

  url = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getSpeakers(): Observable<ResultApi> {
    return this.http.get<ResultApi>(`${this.url}/speakers`);
  }
  getSpeaker(href): Observable<string> {
    return this.http.get(href, { responseType: 'text' });

  }

  getLinkdata(href: string): Observable<ResultApi> {
    return this.http.get<ResultApi>(href);
  }
}
