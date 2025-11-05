import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Pie } from '../../../models/pie';
import { CartService } from '../../../services/cart.service';
import { ROUTER_TOKENS } from '../../../app.routes';
import { PieService } from '../../../services/pie.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() pie!: Pie;
  readonly cartService = inject(CartService);
  readonly pieService = inject(PieService);
  readonly router = inject(Router);
  readonly activatedRoute = inject(ActivatedRoute);

  selectPie(pie: Pie) {
    this.router.navigate([`../${ROUTER_TOKENS.SHOP}`, pie.category], {
      relativeTo: this.activatedRoute,
      queryParams: {productId: pie.id},
      queryParamsHandling: "merge",
    });
  }
}
