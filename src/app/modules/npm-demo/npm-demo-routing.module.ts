import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpmDemoHomeComponent } from './components/npm-demo-home/npm-demo-home.component';

const routes: Routes = [
  { path: '', component: NpmDemoHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpmDemoRoutingModule { }
