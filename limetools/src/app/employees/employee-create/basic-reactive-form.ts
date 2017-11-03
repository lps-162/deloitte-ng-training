// import { Component, OnInit } from '@angular/core';
// import { Employee } from '../../shared/models/employee';
// import { EmployeesService } from '../../shared/services/employees.service';
// import { Router } from '@angular/router';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import 'rxjs/add/operator/debounceTime';

// @Component({
//   selector: 'app-employee-create',
//   templateUrl: './employee-create.component.html',
//   styleUrls: ['./employee-create.component.css']
// })
// export class EmployeeCreateComponentDummy implements OnInit {
//   createForm: FormGroup;
//   formErrors = {
//     empNo: true
//   };

//   newEmployee: Employee = new Employee('', '', '');
//   firstNameError: string ;

//   constructor(private service: EmployeesService,
//               private router: Router,
//               private fb: FormBuilder) { }

//   ngOnInit() {
//     this.buildForm();
//   }

//   private buildForm() {


//     // creating a form group
//     this.createForm = this.fb.group({
//       empNo: ['', Validators.required],
//       firstName: ['', [
//                         Validators.required, 
//                         Validators.minLength(6), 
//                         Validators.maxLength(10)]
//                   ],
//       lastName: ['', Validators.required],
//       city: ['', Validators.required]
//     });

//     this.createForm.valueChanges.subscribe(data => {
//       console.log(data);
//       this.firstNameError = '';
//       const firstNameControl = this.createForm.get('firstName');
//       if (firstNameControl.dirty && firstNameControl.invalid) {
        
//         if (firstNameControl.errors['required'])
//           this.firstNameError = 'First Name is Required';
//         if (firstNameControl.errors['minlength'])
//           this.firstNameError = 'First Name should be minimum 6 characters';
//         if (firstNameControl.errors['maxlength'])
//           this.firstNameError = 'First Name cannot exceed 10 characters';
//       }
//     });

//     // const firstNameControl = this.createForm.get('firstName');
//     // firstNameControl.valueChanges.debounceTime(2000)
//     //   .subscribe(data => {
    
//     // });

//   }

//   createEmployee() {
//     this.service.createEmployee(this.newEmployee)
//         .subscribe(employee => {
//           this.router.navigate(['/employees']);
//         })
//   }
// }
