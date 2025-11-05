import { Component, inject, Input } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRODUCT_ROUTER_TOKENS } from '../products.routes';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input() customize = false;
  pieService = inject(PieService);

  readonly customizeLink = `./${PRODUCT_ROUTER_TOKENS.CUSTOMIZE}`
  readonly detailsLink = `./${PRODUCT_ROUTER_TOKENS.DETAIL}`
  pies$ = this.pieService.filteredPies$;

}
