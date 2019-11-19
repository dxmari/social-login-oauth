import { LoginOpt } from './interfaces/user.interface';
export declare class GoogleService {
    static signIn(clientId: string, opt?: LoginOpt): Promise<any>;
    static getLoginStatus(): Promise<any>;
    static signOut(revoke?: boolean): Promise<any>;
}
export declare class FacebookService {
    static signIn(clientId: string, opt?: LoginOpt): Promise<any>;
    static getLoginStatus(): Promise<any>;
    static signOut(revoke?: boolean): Promise<any>;
}
//# sourceMappingURL=index.d.ts.map