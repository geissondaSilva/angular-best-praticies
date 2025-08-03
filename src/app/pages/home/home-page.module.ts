import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePageComponent,
            }
        ]),
        TodoListComponent,
    ],
    exports: [],
    declarations: [HomePageComponent],
    providers: [],
})
export class HomePageModule { }
