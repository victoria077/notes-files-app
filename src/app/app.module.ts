
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule,  MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatDrawer, MatDrawerContent, MatDrawerContainer, MatSidenavModule, MatCheckboxModule, MatNavList, MatToolbarModule, MatListModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpAuthHeaderInterceptor } from './interceptor/http-auth-header-interceptor';
import { FilesComponent } from './files/files.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SignupComponent,
    LoginComponent,
    FilesComponent,
    NavigationComponent,
    SidenavListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthHeaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
