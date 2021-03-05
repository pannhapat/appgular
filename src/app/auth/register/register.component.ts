import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      about: new FormControl()
    });


  }

  ngOnInit(): void {
  }

}
