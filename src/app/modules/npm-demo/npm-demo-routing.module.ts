import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NpmDemoHomeComponent } from './components/npm-demo-home/npm-demo-home.component';
import { ChartWithTypescriptComponent } from './components/chart-with-typescript/chart-with-typescript.component';

const routes: Routes = [
  { path: '', component: NpmDemoHomeComponent },
  { path: 'ts', component: ChartWithTypescriptComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NpmDemoRoutingModule { }
