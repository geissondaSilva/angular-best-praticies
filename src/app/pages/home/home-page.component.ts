import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MessageService } from 'primeng/api';

@Component({
    standalone: false,
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html',
    providers: [MessageService]
})
export class HomePageComponent implements OnInit {

    protected todos: Todo[] = [];

    constructor(
        private todoService: TodoService,
        private fb: FormBuilder,
        private message: MessageService,
    ) {
        
    }

    ngOnInit() {
        this.todoService.listAll().subscribe(data => {
            this.todos = data;
        });
    }

    addTodo(todo: Todo) {
        this.todos = [...this.todos, todo];
    }

    getLabelTag(status: string): string {
        switch (status) {
            case 'concluida': return 'Concluída';
            case 'cancelada': return 'Cancelada';
            default: return 'Pendente';
        }
    }

    getSeverityTag(status: string): string {
        switch (status) {
            case 'concluida': return 'success';
            case 'cancelada': return 'danger';
            default: return 'warn';
        }
    }
}