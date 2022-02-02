import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Customer } from 'src/app/shared/Models/customer.model';
import { CustomersService } from 'src/app/shared/Services/customers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customersList:Customer[]=[];
  displayedColumns: string[] = ['name', 'email', 'phone', 'options'];
  dataSource = new MatTableDataSource<Customer>();

  //material paginator intilization
  @ViewChild(MatPaginator) paginator: MatPaginator | null | undefined;

  constructor(private customerService:CustomersService, private router:Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getCustomersList();
  }

  //initlization pagination on view init
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator
  }

  //calling customer list api to get list of customers
  getCustomersList(){
    this.customerService.customersList().subscribe(res=>{
          this.dataSource.data = res;
          this.spinner.hide();
    })
  }


  //navigate to details page
  showDetails(id:string){
    this.router.navigate([`/customer/${id}`]);
  }

 
}
