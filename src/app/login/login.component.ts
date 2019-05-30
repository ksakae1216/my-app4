import { Component, OnInit } from '@angular/core';
import { LoginInfoDef } from '../object/login-info-def';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logininfo: LoginInfoDef = { loginid: '', password: '' };

  constructor(public loginService: LoginService) { }

  ngOnInit() {
  }

}
