import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTER_TOKENS } from '../../app.routes';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  pieService = inject(PieService);
  pies$ = this.pieService.filteredPies$;
  selectedPie$ = this.pieService.selectedPie$;

}
