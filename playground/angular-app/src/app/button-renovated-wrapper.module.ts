import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { DxButtonModule } from './button-renovated-wrapper';

import { ButtonComponent } from './button-renovated-wrapper.component';

const routes: Routes = [{ path: '', component: ButtonComponent }];

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxButtonModule
  ],
  exports: [RouterModule]
})
export class ButtonRenovatedWrapperModule { }