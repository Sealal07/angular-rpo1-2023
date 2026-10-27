import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = 'Заголовок карточки';
  @Input() desc: string = 'Описание карточки';

  likesCount: number = 0;

  incrementLikes(){
    this.likesCount++;
  }
// EventEmitter генерирует событие нажатия на кнопку удаления
  @Output() cardDelete = new EventEmitter<void>();

  onDeleteClick(){
    this.cardDelete.emit(); // вызываем событие удаления
  }
}
