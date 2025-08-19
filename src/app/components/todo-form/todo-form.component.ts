import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { Todo } from '../../models/todo';

@Component({
    selector: 'app-todo-form',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputTextModule,
        SelectModule,
        ButtonModule,
    ],
    templateUrl: './todo-form.component.html',
    styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {

    @Output() newTodo = new EventEmitter<Todo>();

    public todoForm: FormGroup;
    public categories = ['compras', 'limpeza', 'estudo', 'social', 'lazer'];

    constructor(
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
                this.newTodo.emit({
                    ...value,
                    status: 'pendente'
                })
                this.todoForm.reset({
                    name: null,
                    category: null,
                    date: null,
                });
            }
        }
    }

}
