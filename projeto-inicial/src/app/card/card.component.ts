import { Component, Input, numberAttribute } from '@angular/core';

// function handlePlanType(value: string) {
//   console.log('handlePlanType', value);
//   return value.toUpperCase();
  
// }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  @Input('planText') textPlan: string = '';
  @Input('priceValue') valuePrice: number = 0;
  //@Input({required:true, alias: 'testeTeste', transform: numberAttribute}) planPrice2: number = 0;
  //@Input({alias: 'planText1', transform:(value:string) => value.toUpperCase()}) planType1 : string = '';

  buttonClicked(valueEmitted: string) {
    console.log('buttonCliked', valueEmitted);
    
  }
 
}
