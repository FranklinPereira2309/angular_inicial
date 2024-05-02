import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  

  @Input('name') peopleName: string = '';
  @Input('age') peopleAge: number = 0;
  @Input('index') peopleIndex: number = 0;
  @Input('even') isEven: boolean = false;
  @Input('odd') isOdd: boolean = false;
  @Input('last') isLast: boolean = false;
  @Input('first') isFirst: boolean = false;
  @Input('highLight') activeHighLight: boolean = false;

  @Output('emitPerson') selectEmitterPerson = new EventEmitter<number>();

  selectPerson() {
    this.selectEmitterPerson.emit(this.peopleIndex);       
  }
}
