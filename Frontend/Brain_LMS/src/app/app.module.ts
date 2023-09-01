import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrandingComponent } from './components/branding/branding.component';
import { BoxesComponent } from './components/boxes/boxes.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './Pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Pages/login/login.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AllcoursesComponent } from './components/allcourses/allcourses.component';
import { AllenrolmentsComponent } from './components/allenrolments/allenrolments.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { AssignmentsComponent } from './Pages/assignments/assignments.component';
import { PerticularComponent } from './Pages/perticular/perticular.component';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BrandingComponent,
    BoxesComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AllcoursesComponent,
    AllenrolmentsComponent,
    CreateCourseComponent,
    AssignmentsComponent,
    PerticularComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
