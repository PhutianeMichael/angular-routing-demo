import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  readonly Category = Category;
  protected readonly ROUTER_TOKENS = ROUTER_TOKENS;

}
