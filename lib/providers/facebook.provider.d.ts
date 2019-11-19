import { Utility } from './../utils/utility';
import { SocialUser, LoginOpt } from './../interfaces/user.interface';
export declare class FacebookLoginProvider extends Utility {
    static readonly PROVIDER_ID: string;
    static oAuthFB: any;
    static signIn(client_id: string, opt?: LoginOpt): Promise<any>;
    static getLoginStatus(): Promise<SocialUser>;
    static signOut(): Promise<any>;
}
//# sourceMappingURL=facebook.provider.d.ts.map