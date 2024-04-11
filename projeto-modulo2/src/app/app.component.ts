import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-modulo2';
  isDesabled = true;
  textInput = 'text'

  enableInput() {
    this.isDesabled = false;
  }
  disabledInput() {
    this.isDesabled = true;
  }

  toggleInput() {
    this.textInput;
  }

  inputText() {
    this.textInput = 'text';
  }

  inputPassword() {
    this.textInput = 'password';
  }
}
