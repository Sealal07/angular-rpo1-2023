import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Tasks } from './pages/tasks/tasks';

// http://localhost:4200/tasks/
export const routes: Routes = [
    {path: '', component: Home}, // главная страница
    {path: 'tasks', component: Tasks}, // страница задач
    {path: '**', redirectTo: ''} // перенаправление при неизвестном URL
];
