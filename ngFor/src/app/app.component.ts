import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  listPeople = [
    {name: 'Felipe Freitas', age: 26}, 
    {name: 'Fulano da Silva', age: 34}, 
    {name:'Jorginho Carvalho', age: 55}, 
    {name:'Joãozinho da Silva', age: 18}
  ];
}
