import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

	goToHome() {
		this.router.navigateByUrl('/home');
	}


    constructor(
        private router: Router
	) { }

  

  

}
