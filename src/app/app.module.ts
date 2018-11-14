import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { AppMaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    TelaPrincipalComponent,
    CadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
