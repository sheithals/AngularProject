// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// component section
import { TemplateRefComponent } from './components/template-ref/template-ref.component';
import { TemplateRef2Component } from './components/template-ref2/template-ref2.component';
import { TemplateRef3Component } from './components/template-ref3/template-ref3.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CpeComponent } from './components/cpe/cpe.component';
import { ContainerComponent } from './components/container/container.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
// pipes
import { CapPipe } from './pipes/cap.pipe';
import { AnsPipe } from './pipes/ans.pipe';
import { PiceCalPipe } from './pipes/pice-cal.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
// directives
import { HighlightDirective } from './directives/highlight.directive';
import { ServicesComponent } from './components/services/services.component';
import { Services1Component } from './components/services1/services1.component';
import { Services2Component } from './components/services2/services2.component';
import { UserComponent } from './DI/user/user.component';
import { AddUserComponent } from './DI/add-user/add-user.component';
import { DiUserService } from './DI/di-user.service';
import { RouterModule, Routes } from '@angular/router';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { UserInterceptor } from './user.interceptor';
import { AuthGuard } from './auth.guard';
import { GrandparentComponent } from './components/grandparent/grandparent.component';
import { DadComponent } from './components/dad/dad.component';
import { KidComponent } from './components/kid/kid.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SharedModule } from './shared/shared.module';
import { TestComponent } from './shared/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';


const route: Routes = [
  {
    path: "",
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "users",
    loadChildren: () => import('../app/user/user.module').then(m => m.UserModule)
  },
  {
    path: "add-user",
    canActivate: [AuthGuard],
    component: AddUserComponent
  },
  {
    path: "user/:userId",
    canActivate: [AuthGuard],
    component: UserComponent
  },
  {
    path: "parent",
    component: ParentComponent,
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "child",
        component: ChildComponent
      }
    ]
  },
  {
    path: "rxjs",
    canActivate: [AuthGuard],
    component: RxjsComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "pagenotfound",
    component: PagenotfoundComponent
  },

  {
    path: "**",
    component: PagenotfoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    TemplateRefComponent,
    TemplateRef2Component,
    TemplateRef3Component,
    ParentComponent,
    ChildComponent,
    CpeComponent,
    ContainerComponent,
    LifecycleComponent,
    CapPipe,
    AnsPipe,
    PiceCalPipe,
    DiscountPipe,
    HighlightDirective,
    ServicesComponent,
    Services1Component,
    AddUserComponent,
    UserComponent,
    Services2Component,
    RxjsComponent,
    RegisterComponent,
    ReactiveFormComponent,
    GrandparentComponent,
    DadComponent,
    KidComponent,
    PagenotfoundComponent,
  ],
  imports: [
    MatIconModule,MatDividerModule,MatButtonModule,
    BrowserModule, // importing other or required modules
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    HttpClientModule,
    // AuthModule,
    SharedModule,
    BrowserAnimationsModule,
    // UserModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserInterceptor,
      multi: true
    }
  ], // injecting the services

  exports: [],// where you are going to share component/pipe/directives to other module

  bootstrap: [AppComponent]
})
export class AppModule { }
