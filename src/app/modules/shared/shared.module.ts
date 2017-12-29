import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports: [
    ErrorComponent
  ],
  declarations: [ErrorComponent]
})
export class SharedModule { }
