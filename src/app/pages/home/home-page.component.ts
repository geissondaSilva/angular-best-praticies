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
    public todoForm: FormGroup;
    public categories = ['compras', 'limpeza', 'estudo', 'social', 'lazer'];

    constructor(
        private todoService: TodoService,
        private fb: FormBuilder,
        private message: MessageService,
    ) {
        this.todoForm = this.fb.group({
            name: ['', Validators.required],
            date: [null, Validators.required],
            category: [null, Validators.required],
        });
    }

    addTodo() {
        if (this.todoForm.invalid) {
            this.todoForm.markAllAsTouched();
            this.message.add({
                severity: 'warn',
                summary: 'Aviso',
                detail: 'Existem campos não preenchidos corretamente.'
            })
        } else {
            const value = this.todoForm.value;
            if (new Date(value.date) < new Date()) {
                this.message.add({
                    severity: 'warn',
                    summary: 'Aviso',
                    detail: 'Não é possível criar tarefas com data retroativa.'
                })
            } else {
                this.todos.push({ ...value, status: 'pendente' });
                this.todoForm.reset({
                    name: '',
                    category: 'compras',
                    date: new Date()
                });
            }
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