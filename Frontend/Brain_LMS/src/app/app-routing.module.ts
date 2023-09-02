import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AssignmentsComponent } from './Pages/assignments/assignments.component';
import { PerticularComponent } from './Pages/perticular/perticular.component';
import { InstructordashboardComponent } from './Pages/instructordashboard/instructordashboard.component';
import { InstructorassiComponent } from './Pages/instructorassi/instructorassi.component';
import { SubmissionsComponent } from './Pages/submissions/submissions.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'perticular', component: PerticularComponent },
  { path: 'instructordashboard', component: InstructordashboardComponent },
  { path: 'intructorassignment', component: InstructorassiComponent },
  { path: 'submissions', component: SubmissionsComponent },
  { path: 'createcourse', component: CreateCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
