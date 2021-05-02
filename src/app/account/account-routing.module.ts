import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {CounterComponent, AccountComponent} from './component';

export const AccountRoutes: Routes = [
    {
        path: 'account',
        component: CounterComponent,
        children: [
            {
                path: '',
                component: AccountComponent
            }
        ]
    }
];

@NgModule({
    imports:[ RouterModule.forChild(AccountRoutes) ],
    exports: [ RouterModule ]
})


export class AccountRoutingModule { }
