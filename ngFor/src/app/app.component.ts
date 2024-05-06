import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  personSelectedIndex: number = 0;

  listPeople = [
    {name: 'Franklin Menezes', age: 26}, 
    {name: 'Fulano de Menezes', age: 34}, 
    {name:'Gabriel Pereira', age: 55}, 
    {name:'Joãozinho da Menezes', age: 18}
  ];
 personIndex(index: number) {
  this.personSelectedIndex = index;  
  
 }
}
