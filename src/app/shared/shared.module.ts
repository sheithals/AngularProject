import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { ButttonComponent } from '../components/buttton/buttton.component';

@NgModule({
  declarations: [
    TestComponent, ButttonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ButttonComponent]
})
export class SharedModule { }
