import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),

    password: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
