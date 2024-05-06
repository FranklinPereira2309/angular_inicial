import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tamanhoTexto: number = 15;
  corTexto: 'white' | 'orange' = 'white' ;  
  textoExibido: 'Branco' | 'Laranja' = 'Laranja'
  //estilosPersonalizados: string = 'font-size: 15px; color: white'
  estiloObj = {
    'font-size': this.tamanhoTexto+'px',
    'color': this.corTexto
  }

  incrementarFonte() {
    this.tamanhoTexto += 5;
    //this.estilosPersonalizados = `font-size: ${this.tamanhoTexto}px; color: ${this.corTexto}`
    this.estiloObj = {
      'font-size':this.tamanhoTexto+'px',
      'color': this.corTexto
    }
  }
  
  trocarCorTexto() {
    if(this.corTexto === 'white') {
      this.corTexto = 'orange';
      this.textoExibido = 'Branco';
    }else {
      this.corTexto = 'white';
      this.textoExibido = 'Laranja';
    }
    //this.estilosPersonalizados = `font-size: ${this.tamanhoTexto}px; color: ${this.corTexto}`
    this.estiloObj = {
      'font-size':this.tamanhoTexto+'px',
      'color': this.corTexto
    }
  }
}
