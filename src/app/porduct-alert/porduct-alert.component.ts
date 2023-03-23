import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-porduct-alert',
  templateUrl: './porduct-alert.component.html',
  styleUrls: ['./porduct-alert.component.css'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;
}
