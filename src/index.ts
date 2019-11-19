
import { GoogleLoginProvider, FacebookLoginProvider } from './providers/index';
import { LoginOpt } from './interfaces/user.interface';

export class GoogleService {

    static signIn(clientId: string, opt?: LoginOpt): Promise<any> {
        return GoogleLoginProvider.signIn(clientId, opt);
    }

    static getLoginStatus(): Promise<any> {
        return GoogleLoginProvider.getLoginStatus();
    }

    static signOut(revoke?: boolean): Promise<any> {
        return GoogleLoginProvider.signOut(revoke);
    }
}

export class FacebookService {

    static signIn(clientId: string, opt?: LoginOpt): Promise<any> {
        return FacebookLoginProvider.signIn(clientId, opt);
    }

    static getLoginStatus(): Promise<any> {
        return FacebookLoginProvider.getLoginStatus();
    }

    static signOut(revoke?: boolean): Promise<any> {
        return FacebookLoginProvider.signOut();
    }
}