import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AboutComponent } from './app/components/about/about.component';
import { HomeComponent } from './app/components/home/home.component';

bootstrapApplication(HomeComponent, appConfig)
  .catch((err) => console.error(err));
