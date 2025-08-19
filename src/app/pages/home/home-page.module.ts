import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePageComponent,
            }
        ]),
        ButtonModule,
        InputTextModule,
        CardModule,
        TableModule,
        FormsModule,
        TagModule,
        FormsModule,
        ReactiveFormsModule,
        SelectModule,
        ToastModule,
    ],
    exports: [],
    declarations: [HomePageComponent],
    providers: [],
})
export class HomePageModule { }
