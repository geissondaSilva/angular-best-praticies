import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
    standalone: false,
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html'
})
export class HomePageComponent implements OnInit {
    
    protected todos: Todo[] = [];
    public todoForm: FormGroup;

    constructor(
        private todoService: TodoService,
        private fb: FormBuilder,
    ) {
        this.todoForm = this.fb.group({
            name: ['', Validators.required],
        });
    }

    addTodo() {
        if (this.todoForm.valid) {
            const { name } = this.todoForm.value;
            this.todos = [
                ...this.todos,
                { name, status: 'pendente' } as Todo
            ];
            this.todoForm.reset({ name: '' });
        } else {
            this.todoForm.markAllAsTouched();
        }
    }

    ngOnInit() {
        this.todoService.listAll().subscribe(data => {
            this.todos = data;
        });
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