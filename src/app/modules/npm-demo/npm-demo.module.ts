import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NpmDemoRoutingModule } from './npm-demo-routing.module';
import { NpmDemoHomeComponent } from './components/npm-demo-home/npm-demo-home.component';
import { SharedModule } from '../shared/shared.module';
import { ChartWithTypescriptComponent } from './components/chart-with-typescript/chart-with-typescript.component';

@NgModule({
  imports: [
    CommonModule,
    NpmDemoRoutingModule,
    SharedModule
  ],
  declarations: [NpmDemoHomeComponent, ChartWithTypescriptComponent]
})
export class NpmDemoModule { }
