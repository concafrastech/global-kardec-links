import {Injectable} from '@angular/core';
import * as Msal from '@azure/msal-browser';
import {BrowserCacheLocation, IPublicClientApplication, LogLevel, PublicClientApplication} from "@azure/msal-browser";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  msalInstance: Msal.PublicClientApplication;

  constructor() {
    let isIE = false;
    if (typeof window !== 'undefined') {
      isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
    }
    this.msalInstance = new Msal.PublicClientApplication({
      auth: {
        clientId: '72ef49ac-ae48-47d2-8827-98de3a771bb6',
        authority: 'https://login.microsoftonline.com/9e55eccf-5e65-4178-98f9-bf59a066ae1a',
        redirectUri: 'http://localhost:4200/',

      },
          cache: {
            cacheLocation: BrowserCacheLocation.LocalStorage,
            storeAuthStateInCookie: isIE, // set to true for IE 11
          },
    });
  }

  /**
   *
   */
  login() {
    this.msalInstance.loginPopup().then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  }
}
