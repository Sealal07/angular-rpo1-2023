import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Hero{
  name: string;
  heroClass: string;
  level: number;
  power: string;
  isAvailable: boolean;
}

@Component({
  imports: [CommonModule],
  selector: 'app-hero-card',
  styleUrl: './hero-card.css',
  templateUrl: './hero-card.html',
})

export class HeroCard {
  @Input() hero!: Hero;

  @Output() onDelete = new EventEmitter();

    deleteHero(){
      this.onDelete.emit();
    }
}
