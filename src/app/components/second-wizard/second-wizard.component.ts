import { Component, OnInit } from '@angular/core';
import {
    Params,
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    LoginService
} from '../../services/login.service';
import {
    UserService
} from '../../services/user.service';
import {
    UtilityService
} from '../../services/utility.service';
import {
    Title
} from '@angular/platform-browser';
import {
    User
} from '../../models/user';

@Component({
  selector: 'app-second-wizard',
  templateUrl: './second-wizard.component.html',
  styleUrls: ['./second-wizard.component.css']
})
export class SecondWizardComponent implements OnInit {

  constructor(
        private loginService: LoginService,
        private userService: UserService,
        private router: Router,
        private titleService: Title  
  ) { }

  ngOnInit() {
  }

}
