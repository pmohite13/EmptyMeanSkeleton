import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,   
    AppRoutingModule,
    CoreModule,     //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  declarations: [
    AppComponent,
    AppRoutingModule.components    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

export function jwtTokenGetter(): string {
  return localStorage.getItem('access_token');
}
