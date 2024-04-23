import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  minhaProp = true;
  // pessoa = {
  //   status: 1,
  // }

  toggle() {
    this.minhaProp = !this.minhaProp;
  }

  isTruthy() {
    //return {};
    //return [];
    //return true;
    //return 1;
    //return "teste";
    //return 'teste';
    //return "0";
    //return "false";
    //return this.pessoa.status;
    
  }
}
