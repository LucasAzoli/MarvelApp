import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUser } from '../../services/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public usuario: LoginUser = new LoginUser();

  private key = localStorage.getItem('key')

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    if (this.key) {
      this.router.navigate(['/characters/0']);
    } else {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.authService.login(this.usuario)
    this.usuario.email = ''
    this.usuario.password = ''
  }

}
