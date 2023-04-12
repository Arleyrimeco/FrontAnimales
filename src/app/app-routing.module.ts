import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
    {path: '', component: HomeTwoComponent},
    {path: 'home-2', component: HomeTwoComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }