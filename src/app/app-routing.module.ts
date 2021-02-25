import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeScreenComponent,
    data: { title: 'Bem Vindo' }
  },
  {
    path: 'autores',
    component: AuthorDetailsComponent,
    data: { title: 'Detalhes dos Autores' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
