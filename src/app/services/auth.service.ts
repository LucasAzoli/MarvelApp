import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginUser, User } from './types';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:3000/users'

  public user!: User;

  constructor( private http:HttpClient, private router: Router ) {
  }

  async login(usuario: LoginUser) {
    this.api += '?email='+usuario.email+'&password='+usuario.password

    this.getLogin.subscribe(
      res => {
        this.user = res[0];
      }
    )

    this.api = 'http://localhost:3000/users'
  }

  auth(id: string | null):boolean {
    this.api += '?id='+id

    this.getAuth.subscribe(
      res => {
        this.user = res[0];
      }
    )

    this.api = 'http://localhost:3000/users'

    return true
  }

  get getAuth(): Observable<User[]> {
    let queryParams = new HttpParams();
    return this.http.get<any>(this.api,{params:queryParams}).pipe(
      catchError((error) => {
        window.alert('Email e/ou senha incorretos!')
        return error
      }),
      tap( res => {
        if (res[0]) {
          localStorage.setItem('id', res[0].id)
          localStorage.setItem('key', res[0].key)
          localStorage.setItem('name', res[0].name)
        } else {
          window.alert('Email e/ou senha incorretos!')
        }
      })
    )
  }

  get getLogin(): Observable<User[]> {
    let queryParams = new HttpParams();
    return this.http.get<any>(this.api,{params:queryParams}).pipe(
      catchError((error) => {
        window.alert('Email e/ou senha incorretos!')
        return error
      }),
      tap( res => {
        if (res[0]) {
          localStorage.setItem('id', res[0].id)
          localStorage.setItem('key', res[0].key)
          localStorage.setItem('name', res[0].name)
          this.router.navigate(['/characters/0'])
        } else {
          window.alert('Email e/ou senha incorretos!')
        }
      })
    )
  }

  userGetAuth():boolean {
    if (localStorage.getItem('id')) {
      return this.auth(localStorage.getItem('id'))
    }

    return false
  }
}