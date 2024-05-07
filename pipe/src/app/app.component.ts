import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  text: string = 'Franklin';

  obj1 = {
    nome: 'Franklin',
    status: 1
  }
  obj2 = {
    nome: 'Marcos',
    status: 2
  }
  obj3 = {
    nome: 'Felipe',
    status: 3
  }

  // getStyle(status: number) {
  //   console.log('getStyle');
    
  //   return {
  //     'active': status === 1,
  //     'partial': status === 2,
  //     'bloked': status === 3
  //   }
  // }
}
