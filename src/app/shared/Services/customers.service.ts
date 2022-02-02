import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../Models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private api = environment.apiEndPoint
  constructor(private http: HttpClient) {
  }


  //customer list api
  customersList():Observable<Customer[]>{
    
    return this.http.get(this.api + '/customer/') as Observable<Customer[]>;
  }


  //geting customer details
  customersById(id:string):Observable<Customer>{
    
    return this.http.get(this.api + `/customer/${id}`) as Observable<Customer>;
  }

  //add post api for adding customer
  addCustomer(data:Customer){
    
    return this.http.post(this.api + '/customer/', data);
  }
  
}
