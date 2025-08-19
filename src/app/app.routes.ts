import { Routes } from '@angular/router';

export const routes: Routes = [
    
    {
        path: 'pessoa',
        loadChildren: () => import('./pages/pessoa/pessoa-page.module').then(m => m.PessoaPageModule),
    },
    {
        path: '',
        loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomePageModule),
    },
];
