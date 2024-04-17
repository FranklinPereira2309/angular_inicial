import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input('planText') textPlan: string = '';
  @Input('priceValue') valuePrice: number = 0;

  buttonClicked(event: string) {
    console.log('buttonCliked', event);
    
  }
 
}
