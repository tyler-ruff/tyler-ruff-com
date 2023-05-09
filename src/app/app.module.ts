import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorModule } from '@angular/material/paginator';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { AppService } from './shared/app.service';

// Pages
import { SingleComponent } from './pages/single/single.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Widgets
import { PostComponent } from './widgets/post/post.component';

// Utilities
import { LazyLoadDirective } from './utils/lazyload.directive';
import { PhoneFormatPipe } from './utils/format-phone.pipe';
import { RelativeTimePipe } from './utils/relative-time.pipe';
import { SanityImagePipe } from './utils/sanity-image.pipe';
import { FormatDatePipe } from './utils/format-date.pipe';
import { ToHTMLPipe } from './utils/to-html.pipe';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

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
    SingleComponent,
    LayoutComponent,
    PhoneFormatPipe,
    RelativeTimePipe
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
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
