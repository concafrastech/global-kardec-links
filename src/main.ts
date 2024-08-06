import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

// Integração com microsoft
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import {MicrosoftIntegrationModule} from "./app/integration/microsoft-integration.module";


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(MicrosoftIntegrationModule)
//   .catch(err => console.error(err));
