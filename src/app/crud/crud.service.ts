import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {

  }

  usersList(): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.get<any>(this.baseUrl + `/users/list`,
        options).pipe(map(this.extract));
  }

  deleteUsers(id): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.delete<any>(this.baseUrl + `/users/delete/${id}`,
        options).pipe(map(this.extract));
  }


  addUsers(params): Observable<any> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    return this.http.post<any>(this.baseUrl + `/users/add`, JSON.stringify(params),
        options).pipe(map(this.extract));
  }

  extract(res: any): any {
    return res || [];
  }
}
