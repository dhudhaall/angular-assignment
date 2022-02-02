import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/Models/customer.model';
import { CustomersService } from 'src/app/shared/Services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer:Customer | undefined;
  constructor(private customerService:CustomersService, private ac:ActivatedRoute) { }

  ngOnInit(): void {
    //getting id from url
    this.ac.params.subscribe(url=>{

      //calling deatals function
      this.getDetails(url['id']);
    })
  }

  //details api request to get customer details
  getDetails(id:string){
    this.customerService.customersById(id).subscribe(res=>{
        this.customer = res;
    })
}




}
