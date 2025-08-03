import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.component.html',
    imports: [
        CommonModule,
        ButtonModule,
        InputTextModule,
        CardModule,
        TableModule,
        FormsModule,
        TagModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        TodoService,
    ]
})



export class TodoListComponent implements OnInit {
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