import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './footer/footer.component';
import { TimePassedPipe } from './pipe/time-passed.pipe';
import { ReversePipe } from './pipe/reverse.pipe';

const routes:Routes = [
  {path:'', redirectTo:'home/1', pathMatch:'full'},
  {path:'home/:page', component:HomeComponent},
  {path:'home/blog/:id', component:BlogComponent},
  {path:'blog/create', component:CreateComponent},
  {path:'edit/:id', component:EditComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    CreateComponent,
    HomeComponent,
    BlogComponent,
    NavBarComponent,
    FooterComponent,
    TimePassedPipe,
    ReversePipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
