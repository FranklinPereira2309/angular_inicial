import { Component, EventEmitter, Output, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false;
  @Output() buttonClickEmiter = new EventEmitter<string>();

  stringTeste: string = 'Fala man!';

  onButtonClick() {
    console.log('onButtonClick');
    this.buttonClickEmiter.emit(this.stringTeste);
  }
}
