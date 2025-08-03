import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { delay, of } from 'rxjs';

const INIT_DATA: Todo[] = [
    {
        id: 1,
        name: 'Comprar pão',
        status: 'pendente'
    },
    {
        id: 2,
        name: 'Lavar o carro',
        status: 'pendente',
    },
    {
        id: 3,
        name: 'Estudar Angular',
        status: 'concluida',
    },
    {
        id: 4,
        name: 'Visitar a Sogra',
        status: 'cancelada'
    }
];

@Injectable({providedIn: 'root'})
export class TodoService {
    
    private data: Todo[] = INIT_DATA;
    private index: number;
    
    constructor() {
        this.index = this.data.length;
    }

    public add(todo: Todo) {
        todo.id = this.index++;
        this.data.push(todo);
    }

    public update(todo: Todo) {
        const i = this.data.findIndex(el => el.id === todo.id);
        this.data[i] = todo;
    }

    public listAll() {
        return of(this.data).pipe(delay(2000));
    }
    
}