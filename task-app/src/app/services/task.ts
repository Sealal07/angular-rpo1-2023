import { Injectable } from '@angular/core';

export interface TaskInteface{
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root' // сервис доступен  во всем приложении 
})

export class Task {
    private tasks: TaskInteface[] = [
        {id: 1, title: 'выучить Angular', completed: false},
        {id: 2, title: 'поспать на паре', completed: true},
    ];

    getTasks(): TaskInteface[] {
        return this.tasks;
    }

    addTask(title: string):void{
        const newTask = {
            id: Date.now(),
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
    }

    deleteTask(id: number):void{
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
    toggleTask(id: number):void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }
}
