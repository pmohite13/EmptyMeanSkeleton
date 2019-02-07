import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IRouting } from './shared/interfaces';


const routes: Routes = [
  { path: 'shell', loadChildren: './shell/shell.module#ShellModule' },  
  { path: "**", redirectTo: "shell" } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [   
  ];
}
