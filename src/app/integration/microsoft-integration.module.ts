// import {Component} from '@angular/core';
// import {RouterOutlet} from '@angular/router';
//
//
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//
// import {
//   IPublicClientApplication,
//   PublicClientApplication,
//   BrowserCacheLocation,
//   LogLevel,
//   InteractionType,
// } from '@azure/msal-browser';
// import {
//   MSAL_INSTANCE,
//   MSAL_INTERCEPTOR_CONFIG,
//   MsalInterceptorConfiguration,
//   MSAL_GUARD_CONFIG,
//   MsalGuardConfiguration,
//   MsalBroadcastService,
//   MsalService,
//   MsalGuard,
//   MsalRedirectComponent,
//   MsalModule,
//   MsalInterceptor,
// } from '@azure/msal-angular';
//
// const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
//
// export function loggerCallback(logLevel: LogLevel, message: string) {
//   console.log(message);
// }
//
// export function MSALInstanceFactory(): IPublicClientApplication {
//   let isIE = false;
//   if (typeof window !== 'undefined') {
//     isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
//   }
//
//
//   return new PublicClientApplication({
//     auth: {
//       clientId: '72ef49ac-ae48-47d2-8827-98de3a771bb6',
//       authority: 'https://login.microsoftonline.com/9e55eccf-5e65-4178-98f9-bf59a066ae1a',
//       redirectUri: 'http://localhost:4200/',
//     },
//     cache: {
//       cacheLocation: BrowserCacheLocation.LocalStorage,
//       storeAuthStateInCookie: isIE, // set to true for IE 11
//     },
//     system: {
//       loggerOptions: {
//         loggerCallback,
//         logLevel: LogLevel.Info,
//         piiLoggingEnabled: false,
//       },
//     },
//   });
// }
//
// export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
//   const protectedResourceMap = new Map<string, Array<string>>();
//   protectedResourceMap.set(GRAPH_ENDPOINT, ['user.read']);
//
//   return {
//     interactionType: InteractionType.Redirect,
//     protectedResourceMap,
//   };
// }
//
// export function MSALGuardConfigFactory(): MsalGuardConfiguration {
//   return {
//     interactionType: InteractionType.Redirect,
//     authRequest: {
//       scopes: ['user.read'],
//     },
//   };
// }
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.less',
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: MsalInterceptor,
//       multi: true,
//     },
//     {
//       provide: MSAL_INSTANCE,
//       useFactory: MSALInstanceFactory,
//     },
//     {
//       provide: MSAL_GUARD_CONFIG,
//       useFactory: MSALGuardConfigFactory,
//     },
//     {
//       provide: MSAL_INTERCEPTOR_CONFIG,
//       useFactory: MSALInterceptorConfigFactory,
//     },
//     MsalService,
//     MsalGuard,
//     MsalBroadcastService,
//   ],
// })
//
// export class AppComponent {
//   title = 'gk-sites';
//
// }

// import {Component} from '@angular/core';
// import {RouterOutlet} from '@angular/router';
// import {TitlePageComponent} from "./pages/components/title-page/title-page.component";
// import {FooterComponent} from "./pages/components/footer/footer.component";
//
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//
// import {
//   IPublicClientApplication,
//   PublicClientApplication,
//   BrowserCacheLocation,
//   LogLevel,
//   InteractionType,
// } from '@azure/msal-browser';
// import {
//   MSAL_INSTANCE,
//   MSAL_INTERCEPTOR_CONFIG,
//   MsalInterceptorConfiguration,
//   MSAL_GUARD_CONFIG,
//   MsalGuardConfiguration,
//   MsalBroadcastService,
//   MsalService,
//   MsalGuard,
//   MsalRedirectComponent,
//   MsalModule,
//   MsalInterceptor,
// } from '@azure/msal-angular';
//
// const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
//
// export function loggerCallback(logLevel: LogLevel, message: string) {
//   console.log(message);
// }
//
// export function MSALInstanceFactory(): IPublicClientApplication {
//   let isIE = false;
//   if (typeof window !== 'undefined') {
//     isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
//   }
//
//
//   return new PublicClientApplication({
//     auth: {
//       clientId: '72ef49ac-ae48-47d2-8827-98de3a771bb6',
//       authority: 'https://login.microsoftonline.com/9e55eccf-5e65-4178-98f9-bf59a066ae1a',
//       redirectUri: 'http://localhost:4200/',
//     },
//     cache: {
//       cacheLocation: BrowserCacheLocation.LocalStorage,
//       storeAuthStateInCookie: isIE, // set to true for IE 11
//     },
//     system: {
//       loggerOptions: {
//         loggerCallback,
//         logLevel: LogLevel.Info,
//         piiLoggingEnabled: false,
//       },
//     },
//   });
// }
//
// export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
//   const protectedResourceMap = new Map<string, Array<string>>();
//   protectedResourceMap.set(GRAPH_ENDPOINT, ['user.read']);
//
//   return {
//     interactionType: InteractionType.Redirect,
//     protectedResourceMap,
//   };
// }
//
// export function MSALGuardConfigFactory(): MsalGuardConfiguration {
//   return {
//     interactionType: InteractionType.Redirect,
//     authRequest: {
//       scopes: ['user.read'],
//     },
//   };
// }
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     TitlePageComponent,
//     FooterComponent
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.less',
//   providers: [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: MsalInterceptor,
//       multi: true,
//     },
//     {
//       provide: MSAL_INSTANCE,
//       useFactory: MSALInstanceFactory,
//     },
//     {
//       provide: MSAL_GUARD_CONFIG,
//       useFactory: MSALGuardConfigFactory,
//     },
//     {
//       provide: MSAL_INTERCEPTOR_CONFIG,
//       useFactory: MSALInterceptorConfigFactory,
//     },
//     MsalService,
//     MsalGuard,
//     MsalBroadcastService,
//   ],
// })
//
// export class AppComponent {
//   title = 'gk-sites';
//
// }
