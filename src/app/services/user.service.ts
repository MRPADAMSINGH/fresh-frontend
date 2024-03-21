import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../api.urls';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // getUserDate(_id:string): Observable<any> {
  //   return this.http.get<any>(`${apiUrls.userServiceApi}${_id}`);
  // }
}
