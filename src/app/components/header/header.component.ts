import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'Alunos',
        icon: 'pi pi-fw pi-user',
        routerLink: '/alunos',
      },
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: '/dashboard',
      },
      { label: 'Agenda', icon: 'pi pi-fw pi-calendar', routerLink: '/agenda' },
      
    ];
  }
}
