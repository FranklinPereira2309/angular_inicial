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
  textHabilitar='Habilitar';
  textDesabilitar='Desabilitar';
  buttonDisable = false;
  isRedButton = true;
  isGreenButton = true;

  enableInput() {
    this.isDesabled = false;
  }
  disabledInput() {
    this.isDesabled = true;
  }

  toggleInput() {
    this.isDesabled = !this.isDesabled;
  }

  inputText() {
    this.textInput = 'text';
  }

  inputPassword() {
    this.textInput = 'password';
  }

  handleInputKeyUp(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
    
  }
  
  handleInput(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
    
  }
  onButtonClick() {
    this.buttonDisable = !this.buttonDisable;
  }

  getButtonGreen() {
    this.isGreenButton = false;
  }
  getButtonRed() {
    this.isGreenButton = true;
   
  }

}
