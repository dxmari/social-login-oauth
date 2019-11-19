import { Utility } from './../utils/utility';
import { SocialUser, LoginOpt } from './../interfaces/user.interface';
export declare class GoogleLoginProvider extends Utility {
    static readonly PROVIDER_ID: string;
    static oAuthGoogle: any;
    static signIn(client_id: string, opt?: LoginOpt): Promise<any>;
    static getLoginStatus(): Promise<SocialUser>;
    static signOut(revoke?: boolean): Promise<any>;
}
//# sourceMappingURL=google.provider.d.ts.map