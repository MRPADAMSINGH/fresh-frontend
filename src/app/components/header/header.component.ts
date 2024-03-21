import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  fullname: string = '';
  email: string = '';
 
  authService = inject(AuthService);
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(res=>{
      this.isLoggedIn = this.authService.isLoggedIn();
      this.userData();
    })
  }

  userData() {
    this.fullname = localStorage.getItem('fullname') || 'Guest';
    this.email = localStorage.getItem('email') || '';
  }

  logout(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('fullname');
    localStorage.removeItem('email');
    this.authService.isLoggedIn$.next(false);

  }
}
