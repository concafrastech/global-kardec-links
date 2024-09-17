import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration} from '@azure/msal-angular';
import {
  EventMessage,
  EventType,
  AuthenticationResult,
  InteractionStatus,
  InteractionType,
  PopupRequest,
  RedirectRequest,
  InteractionRequiredAuthError
} from '@azure/msal-browser';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {ButtonModule} from 'primeng/button';
import {Client} from '@microsoft/microsoft-graph-client';
import {AuthService} from "../services/auth/auth.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],

})
export class HomeComponent implements OnInit, OnDestroy {
  // private graphClient: Client;

  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  private interactionInProgress = false;

  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authInstanceService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private authService: AuthService,
    private http: HttpClient,
  ) {
// Inicialize o cliente do Microsoft Graph
//     this.graphClient = Client.init({
//       authProvider: async (done) => {
//         console.log('Checking for accounts...');
//         const accounts = this.authService.msalInstance.getAllAccounts();
//         console.log('Found accounts:', accounts); // Log account details if found
//
//         if (accounts.length > 0) {
//           try {
//             console.log('Acquiring token silently...');
//             const response = await this.authService.msalInstance.acquireTokenSilent({
//               scopes: ['User.Read', 'profile'],
//               account: accounts[0]
//             });
//             done(null, response.accessToken);
//             console.log('Token acquired:', response); // Log token details for debugging
//           } catch (error) {
//             console.error('Silent token acquisition failed:', error);
//             done(error, null);
//           }
//         } else {
//           done('No account found', null);
//         }
//       }
//     });
//     console.log(this.graphClient.api('/profile').get())
  }

  async ngOnInit(): Promise<void> {

    await this.authInstanceService.instance.initialize();

    if (typeof window !== 'undefined') {
      this.isIframe = window !== window.parent && !window.opener;

      this.msalBroadcastService.inProgress$
        .pipe(
          filter((status: InteractionStatus) => status === InteractionStatus.None),
          takeUntil(this._destroying$)
        )
        .subscribe(() => {
          this.setLoginDisplay();
        });

      this.setLoginDisplay();
    }


  }

  setLoginDisplay() {
    this.loginDisplay = this.authInstanceService.instance.getAllAccounts().length > 0;
  }

  async login() {
    if (this.interactionInProgress) {
      console.warn('Interaction is currently in progress. Please wait.');
      return;
    }

    this.interactionInProgress = true;

    try {
      if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
        const authRequest = this.msalGuardConfig.authRequest
          ? {...this.msalGuardConfig.authRequest} as PopupRequest
          : undefined;
        const response = await this.authInstanceService.instance.loginPopup(authRequest);
        this.authInstanceService.instance.setActiveAccount(response.account);
      } else {
        const authRequest = this.msalGuardConfig.authRequest
          ? {...this.msalGuardConfig.authRequest} as RedirectRequest
          : undefined;
        await this.authInstanceService.instance.loginRedirect(authRequest);
      }
    } finally {
      this.interactionInProgress = false;
    }
  }

  async getUser() {
    const request = {scopes: ["openid", "profile", "email"]};

    try {
      const account = this.authService.msalInstance.getAllAccounts()[0];
      if (!account) {
        throw new Error('No account found');
      }
      this.authInstanceService.acquireTokenSilent(request).subscribe({
          next: async (response) => {
            const accessToken = response.accessToken;

            const headers = new HttpHeaders({
              'Authorization': `Bearer ${accessToken}`
            });

            this.http.get<any>('https://graph.microsoft.com/v1.0/me/directReports', { headers: headers }).subscribe(profile => {
              console.log(profile);
            });
          },
          error: error => console.error(error)
        });

      // console.log(response)

    } catch (error) {
      console.error(error);
    }
  }

  logout() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authInstanceService.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authInstanceService.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
}
