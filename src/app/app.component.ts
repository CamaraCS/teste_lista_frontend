import { Component } from '@angular/core';
import { AppbarComponent } from './appbar/appbar.component';
import { LoginComponent } from './login/login.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})

export class AppComponent {
  title = 'app';

  constructor(private router: Router) { }
  redirectTo(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
