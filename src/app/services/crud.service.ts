import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URL: string = "https://679c2a8a33d3168463260fc2.mockapi.io/user";

  constructor(private http: HttpClient) { }


  createUser(user: any): Observable<any[]> {
    return this.http.post<any>(this.API_URL, user)
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any>(this.API_URL)
  }

  updateUser(id: number, user: any): any {
    console.log({ id, user }, "payload of update");

    return this.http.put<any>(`${this.API_URL}/${id}`, user)
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }


}


// trakeby,
// pagenot found route
// avoid memory leak (unsubscribe),
// asyn pipe,
// modules,
// lazy loading,
// change detection,