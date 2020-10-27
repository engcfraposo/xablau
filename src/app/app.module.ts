import { SharedModule } from './shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AtaqueComponent } from './pages/ataque/ataque.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtaqueComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
