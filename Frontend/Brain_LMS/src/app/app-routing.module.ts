import { authGuardGuard } from './Guard/auth-guard.guard';
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
import { AnnouncementComponent } from './Pages/announcement/announcement.component';
import { ParticularAnnounceComponent } from './Pages/particular-announce/particular-announce.component';
import { AnnounceCreateComponent } from './components/announce-create/announce-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [authGuardGuard],
    component: DashboardComponent,
  },
  {
    path: 'assignments',
    canActivate: [authGuardGuard],
    component: AssignmentsComponent,
  },
  {
    path: 'perticular',
    canActivate: [authGuardGuard],
    component: PerticularComponent,
  },
  { path: 'instructordashboard', component: InstructordashboardComponent },
  { path: 'intructorassignment', component: InstructorassiComponent },
  {
    path: 'submissions',
    canActivate: [authGuardGuard],
    component: SubmissionsComponent,
  },
  { path: 'createcourse', component: CreateCourseComponent },
  {
    path: 'announcement',
    canActivate: [authGuardGuard],
    component: AnnouncementComponent,
  },
  {
    path: 'announcementper',
    canActivate: [authGuardGuard],
    component: ParticularAnnounceComponent,
  },
  { path: 'anouncecreate', component: AnnounceCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
