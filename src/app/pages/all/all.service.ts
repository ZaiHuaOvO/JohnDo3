import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../services/api';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class AllService {
  constructor(private http: HttpService) { }

  getAlls(data?: any): Observable<object> {
    return this.http.get(API.ALL, data);
  }

  getBlogDetail(Id: string): Observable<object> {
    return this.http.get(API.BLOG + `/${Id}`);
  }

  getWebInfo(): Observable<object> {
    return this.http.get(API.INFO);
  }
}
