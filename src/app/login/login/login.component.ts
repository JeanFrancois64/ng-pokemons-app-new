import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string = 'Vous êtes déconnecté. (admin/admin)';
  name: string;
  password: string;

  constructor(public _authService: AuthService, private router: Router) { }

  setMessage() {
    this.message = this._authService.isLoggedIn ? 'Vous êtes connecté.' : 'Identifiant ou MDP incorrect';
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this._authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if(this._authService.isLoggedIn){
        let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/pokemon/all';
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }

  logout() {
    this._authService.logout();
    this.setMessage();
  }

}
