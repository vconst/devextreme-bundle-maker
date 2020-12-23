import { BrowserModule, enableDebugTools } from '@angular/platform-browser';
import { NgModule, ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DxComponentNestingPageModule, DxComponentNestingPageComponent } from './component_nesting_page';


enableProdMode();

const routes: Routes = [
  { 
    path: 'button/basic', 
    loadChildren: () => (
      import('./button-wrapper.module'
    )).then(m => m.ButtonWrapperModule)
  }, { 
    path: 'button/renovatedwrapper', 
    loadChildren: () => (
      import('./button-renovated-wrapper.module'
    )).then(m => m.ButtonRenovatedWrapperModule)
  }, { 
    path: 'button/renovated', 
    loadChildren: () => (
      import('./button-native.module'
    )).then(m => m.ButtonNativeModule)
  }, {
    path: 'component_nesting_page',
    component: DxComponentNestingPageComponent
  }

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    DxComponentNestingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(moduleRef => {
        const applicationRef = moduleRef.injector.get(ApplicationRef);
        const componentRef = applicationRef.components[0];
        // allows to run `ng.profiler.timeChangeDetection();`
        // enableDebugTools(componentRef);
    })
    .catch(err => console.log(err));
