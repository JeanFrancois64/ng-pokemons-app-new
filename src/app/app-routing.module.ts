import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found.component';

const appROutes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appROutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }