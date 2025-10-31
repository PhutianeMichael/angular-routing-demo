import { Component, inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgOptimizedImage,
  ],
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  pieService = inject(PieService);
  pies$ = this.pieService.filteredPies$;
  selectedPie$ = this.pieService.selectedPie$;

  selectPie(id: string) {
    this.pieService.setSelectedPie(id);
  }
}
