import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: []
})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public nome: string = '';

  adicionarClique() {
    this.contadorClique++;
  }

  removerClique() {
    this.contadorClique--;
  }

  zerarContadorClique() {
    this.contadorClique = 0;
  }

  KeyUp(event: any) {
    this.nome = event.target.value;
  }

}
