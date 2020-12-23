import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DxButtonModule } from './button-wrapper';
// import { DxButtonModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common'

import { ButtonComponent } from './button-wrapper.component';

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
export class ButtonWrapperModule { }