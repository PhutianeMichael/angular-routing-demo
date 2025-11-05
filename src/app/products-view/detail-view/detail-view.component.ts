import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  imports: [
    MatButtonModule,
  ],
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent {
  readonly cartService = inject(CartService)
  selectedPie = this.cartService.selectedItemPlusQuantity;
}
