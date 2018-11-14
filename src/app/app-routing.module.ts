import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  { path: '',  redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'tela_principal', component: TelaPrincipalComponent },
  { path: 'cadastro_produto', component:  CadastroProdutoComponent},
  { path: 'cadastro_usuario', component: CadastroUsuarioComponent }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
