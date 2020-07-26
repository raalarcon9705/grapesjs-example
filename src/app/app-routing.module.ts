import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent, ResultsComponent } from './componensts';

const routes: Routes = [
  {
    path: 'editor',
    component: EditorComponent,
    data: { title: 'Editor' }
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '',
    redirectTo: 'editor',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
