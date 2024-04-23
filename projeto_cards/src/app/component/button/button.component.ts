import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required: true, alias: 'text'}) buttonText: string = '';
  @Input({required: true, alias: 'style'}) buttonStyle: 'white' | 'purple' = 'white';

  @Output('clicked') buttonClicledEmit = new EventEmitter<void>();

  @Input('disabled') isDisabled: boolean = false;

  buttonCliked() {
    this.buttonClicledEmit.emit();
  }
}
