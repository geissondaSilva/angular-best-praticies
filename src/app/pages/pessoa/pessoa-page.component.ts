import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    standalone: false,
    selector: 'app-pessoa-page',
    templateUrl: 'pessoa-page.component.html'
})
export class PessoaPageComponent implements OnInit {

    protected origens: string[];

    protected pessoaForm;

    constructor() {
        this.pessoaForm = new FormGroup({
            nome: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            cpf: new FormControl(null, Validators.required),
            origem: new FormControl(null, Validators.required),
            cidade: new FormControl(null, Validators.required),
            bairro: new FormControl(null, Validators.required),
            rua: new FormControl(null, Validators.required),
            numero: new FormControl(null, Validators.required),
            complemento: new FormControl(null, Validators.required),
            aceitaContato: new FormControl(true, Validators.required),
            telefone: new FormControl(null, Validators.required),
        });
        this.origens = ['Brasileiro', 'Estrangeiro'];
        this.pessoaForm.get('origem')?.valueChanges.subscribe((origen) => this.onChangeOrigem(origen));
    }

    ngOnInit() { }

    private onChangeOrigem(origem: string | null) {
        if (origem !== 'Brasileiro') {
            this.pessoaForm.get('cidade')?.disable();
            this.pessoaForm.get('bairro')?.disable();
            this.pessoaForm.get('rua')?.disable();
            this.pessoaForm.get('numero')?.disable();
            this.pessoaForm.get('complemento')?.disable();
        } else {
            this.pessoaForm.get('cidade')?.enable();
            this.pessoaForm.get('bairro')?.enable();
            this.pessoaForm.get('rua')?.enable();
            this.pessoaForm.get('numero')?.enable();
            this.pessoaForm.get('complemento')?.enable();
        }
    }

}