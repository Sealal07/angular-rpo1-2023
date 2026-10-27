import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Card } from './card/card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, Card, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'test-app';

  userName: string = ''; 

  isWarnning: boolean = true;
  boxColor: string = 'orange';

  isActive: boolean = true;

  cards = [
    {id: 1, title: 'Angular', desc: 'Фреймфорк'},
    {id: 2, title: 'TypeScript', desc: 'Типизированный JS'},
    {id: 3, title: 'Component', desc: 'Строительный блок'},
  ];
  removeCard(id: number){
      this.cards = this.cards.filter(card => card.id !== id);
  }
}
