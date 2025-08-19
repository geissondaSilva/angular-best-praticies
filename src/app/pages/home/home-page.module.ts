import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { TodoFormComponent } from '../../components/todo-form/todo-form.component';
import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePageComponent,
            }
        ]),
        CardModule,
        TableModule,
        TagModule,
        ToastModule,
        TodoFormComponent,
    ],
    exports: [],
    declarations: [HomePageComponent],
    providers: [],
})
export class HomePageModule { }
