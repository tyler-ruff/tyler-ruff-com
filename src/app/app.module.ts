import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadDirective } from './lazyload.directive';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatPaginatorModule} from '@angular/material/paginator';
import { SanityImagePipe } from './sanity-image.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { PostComponent } from './post/post.component';
import { SingleComponent } from './single/single.component';
import { ToHTMLPipe } from './to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProjectsComponent,
    BlogComponent,
    AboutComponent,
    SanityImagePipe,
    FormatDatePipe,
    ToHTMLPipe,
    PostComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
