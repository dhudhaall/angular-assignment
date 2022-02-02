import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/shared/Models/customer.model';
import { CustomersService } from 'src/app/shared/Services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  addCustomerForm:FormGroup;
  isSubmitted =  false;


  constructor(private fb:FormBuilder, private customerService: CustomersService, private toaster:ToastrService) {
    //initialixze  add customer from
    this.addCustomerForm = this.fb.group({
      name:['', [Validators.required]],
      email:['' ,[Validators.required, Validators.email]],
      phone:['' ,[Validators.required]],
      address:['' ,[Validators.required]],
    })
   }

  ngOnInit(): void {
    
  }


    //getter for customer form
  public get f(){return this.addCustomerForm.controls;}


  //submit method for adding customer form
  submitAddCustomer(){
    this.isSubmitted = true;
    let value = this.addCustomerForm.value;

    if(this.addCustomerForm.valid){
      const data:Customer = {...value};

      this.customerService.addCustomer(data).subscribe( res=>{
        this.toaster.success('customer added Successfully');
      },err=>{
        console.log("err", err);
       
        if (err.error) {
          const errorCat = Object.values(err.error)
          const allErrors = this.flat(errorCat);

          allErrors.forEach(element => {
            this.toaster.error(element);
          })

        }

        
      })
    }
  }

  
  flat(arrays: any[]) {
    return [].concat.apply([], arrays)
  }

}
