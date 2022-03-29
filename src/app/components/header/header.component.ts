import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public name = localStorage.getItem('name')?.toUpperCase()

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('id')
    localStorage.removeItem('key')
    localStorage.removeItem('name')
    this.router.navigate(['/']);
  }

}
