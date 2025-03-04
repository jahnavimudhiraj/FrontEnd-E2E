import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl="https://localhost:7293/api/Owner" //baseUrl
  constructor(private http:HttpClient) { }
  getAllOwners():Observable<any[]>{
    const url=this.apiUrl ;
    return this.http.get<any[]>(url);
  }
  getOwner(id:number):Observable<any[]>{
    const url=`${this.apiUrl}/owners/${id}`;
    return this.http.get<any>(url)
  }
  addOwner(owner : any):Observable<any>{
    return this.http.post(this.apiUrl,owner);
  }
}
