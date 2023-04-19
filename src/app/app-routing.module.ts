import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';

const routes: Routes = [
    {path: '', component: HomeTwoComponent},
    {path: 'home-2', component: HomeTwoComponent},
    // Here add new pages component
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }