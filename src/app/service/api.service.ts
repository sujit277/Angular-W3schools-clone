import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /* Method for Creating Records After Registration */
  postUser(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/customers', data);
  }

  /* Method for Getting Customers Data for Login  */
  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/customers');
  }
}
