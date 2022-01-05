import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }, { path: 'projects', 
loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
