import { RouterLink } from '@angular/router';
import { routes } from './../../app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ],
  templateUrl: './navbar.component.html',
})

export default class NavbarComponent {
  routes = routes.map((route) => ({
    title: route.title ?? '',
    path: route.path ?? ''
  }))
}
