import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Customer } from 'src/app/shared/Models/customer.model';

import { AddCustomerComponent } from './add-customer.component';

describe('AddCustomerComponent', () => {
  let component: AddCustomerComponent;
  let fixture: ComponentFixture<AddCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.addCustomerForm.valid).toBeFalsy();
  });

  it('submitting a form emits a user', () => {
    expect(component.addCustomerForm.valid).toBeFalsy();
    component.addCustomerForm.controls['name'].setValue("abcdef");
    component.addCustomerForm.controls['address'].setValue("abc xyz");
    component.addCustomerForm.controls['email'].setValue("test@test.com");
    component.addCustomerForm.controls['phone'].setValue("192923232333");
    expect(component.addCustomerForm.valid).toBeTruthy();

    // Trigger the login function
    component.submitAddCustomer();
  });
  // it('name field validity', () => {
  //   let errors = {};
  //   let name = component.addCustomerForm.controls['name'];
  //   errors = name.errors || {};
  //   expect(errors['required']).toBeTruthy(); (1)
  // });
  // it('email field validity', () => {
  //   let errors = {};
  //   let email = component.addCustomerForm.controls['email'];
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeTruthy(); (1)
  // });
  // it('phone field validity', () => {
  //   let errors = {};
  //   let phone = component.addCustomerForm.controls['phone'];
  //   errors = phone.errors || {};
  //   expect(errors['required']).toBeTruthy(); (1)
  // });
  // it('address field validity', () => {
  //   let errors = {};
  //   let address = component.addCustomerForm.controls['address'];
  //   errors = address.errors || {};
  //   expect(errors['required']).toBeTruthy(); (1)
  // });
});
