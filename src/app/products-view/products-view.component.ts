import { Component, inject, Input } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PieService } from '../services/pie.service';
import { RouterOutlet } from '@angular/router';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';

@Component({
  standalone: true,
  imports: [
    SideMenuComponent,
    RouterOutlet,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
  ],
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss'],
})
export class ProductsViewComponent {
  @Input() set categoryId(val: string) {
    this.pieService.setSelectedCategory(val);
  }

  private readonly pieService = inject(PieService)
}
