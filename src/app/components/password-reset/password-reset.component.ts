import { Component, OnInit } from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    LoginService
} from '../../services/login.service';
import {
    UserService
} from '../../services/user.service';
import {
    Title
} from '@angular/platform-browser';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(
        private loginService: LoginService,
        private userService: UserService,
        private router: Router,
        private titleService: Title  
  ) { }
  
  username:string="";
  emailSent:boolean=false;
  accountDoesntExist:boolean=false;
  emailSyntaxOk:boolean=true;
  
    emailCheck(value: string): boolean {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(value);
    }  
  
  onTextInput(){
	this.emailSyntaxOk =this.emailCheck(this.username);
	this.accountDoesntExist=false;
  }
  
  onSubmit(){	
	let check=this.emailCheck(this.username);
	if(check)
		this.loginService.resetPassword(this.username).subscribe(
			res=>{
				this.router.navigate(['/login']);
			},
			err=>{
				this.accountDoesntExist=true;
			}
		);
  }

  ngOnInit() {
        this.titleService.setTitle("Reinitialisation Mot de Passe");
        this.loginService.checkSession().subscribe(
            res => {                
                this.loginService.sendLoginEvent(true);
                this.router.navigate(['/user_profile']);
            },
            error => {
                this.loginService.sendLoginEvent(false);			
            }
        );	  
  }

}
