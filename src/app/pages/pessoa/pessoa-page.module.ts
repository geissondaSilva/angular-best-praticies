import { NgModule } from '@angular/core';

import { PessoaPageComponent } from './pessoa-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: PessoaPageComponent,
            }
        ]),
        InputTextModule,
        ButtonModule,
        SelectModule,
        CardModule,
    ],
    exports: [],
    declarations: [PessoaPageComponent],
    providers: [],
})
export class PessoaPageModule { }
