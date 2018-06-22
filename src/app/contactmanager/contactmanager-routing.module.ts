import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "", component: ContactmanagerAppComponent,
    children: [
      { path: "", component: MainContentComponent }
    ]
  },
  { path: "**", redirectTo: "" }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanagerRoutingModule { }
