import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero, HeroCard } from './components/hero-card/hero-card';

@Component({
  imports: [CommonModule, FormsModule, HeroCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // для формы создания текущего героя
  currentHero: Hero = {
    name: '',
    heroClass: 'warriror',
    level: 1,
    power: 'Огненный шар',
    isAvailable: true,
  }

  availablePower = ['Огненный шар', 'Невидимость', 'Молния',
                    'Ледяной шторм', 'Исцеление'];

  heroes: Hero[] = [
    {name: 'Артас', heroClass: 'warriror', level: 8,
      power: 'Молния',
      isAvailable: true,
  },
  ];
  isAnimating: boolean = true;

  addHero(){
    // добавляем копию объекта
    this.heroes.push({...this.currentHero});
    this.currentHero = {name: '',
                        heroClass: 'warriror',
                        level: 1,
                        power: 'Огненный шар',
                        isAvailable: true
                      };
    setTimeout(()=>{
      this. = false;
    }, 150);                  


    }

    removeHero(index: number){
      this.heroes.splice(index, 1); // вырезаем начиная с индекса
    }
}
