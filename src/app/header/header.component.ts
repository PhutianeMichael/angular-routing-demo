import { Component, inject } from '@angular/core';
import { Category } from '../models/pie';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../app.routes';
import { NgOptimizedImage } from '@angular/common';
import { CartService } from '../services/cart.service';

@Component({
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartService = inject(CartService);
  readonly Category = Category;
  readonly outlets = {[ROUTER_TOKENS.CART]: ROUTER_TOKENS.CHECKOUT};
  protected readonly ROUTER_TOKENS = ROUTER_TOKENS;
  readonly totalItems = this.cartService.totalItems;
}
