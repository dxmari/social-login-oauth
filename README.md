# Social Login for all Typescript Projects like Angular 2 & above, reactJS, VueJS etc ..,

Social login and authentication which supports authentication with **Google** and **Facebook** platforms.

## Getting started

### Install via npm 

```sh
npm install social-login-oauth --save 
```

### Usage

```javascript

import { GoogleService, FacebookService } from "social-login-oauth";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  constructor() { }

  googleSignIn() {
    GoogleService.signIn(gClientid)
  }
  
  getGoogleLoginStatus(){
    GoogleService.getLoginStatus() 
  }

  facebookSignIn(): void {
    FacebookService.signIn(facebookID)
  } 
  
  getFacebookLoginStatus(){
    FacebookService.getLoginStatus()
  }

  googleSignOut(): void {
    //if revoke is true, it will be disconnected instead of signout.
    GoogleService.signOut(revoke);
  }
  
  facebookSignOut(): void {
    FacebookService.signOut();
  }

}
```

### Possible fields get after the Social login.

```javascript
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    authToken: string;
    idToken?: string;
    authorizationCode?: string;
    provider?: string;
    facebook?: any;
    linkedIn?: any;
```

## Specifying custom scope

### For Google

```javascript

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

GoogleService.signIn(gClientid,googleLoginOptions)
```

### For Facebook

```javascript

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
}; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11

FacebookService.signIn(facebookID,fbLoginOptions)
```

## License

[MIT](LICENSE)
