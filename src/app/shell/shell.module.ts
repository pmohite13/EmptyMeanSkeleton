import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ShellComponent } from './shell.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';


const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [

      { path: 'aboutWebridge', component: AboutUsComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    MainContentComponent,
    ShellComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent
  ],
  providers: [
  ],
})
export class ShellModule { }
