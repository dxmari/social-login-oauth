import { Utility } from './../utils/utility';
import { SocialUser, LoginOpt } from './../interfaces/user.interface';

export class GoogleLoginProvider extends Utility {
    public static readonly PROVIDER_ID: string = 'GOOGLE';
    public static oAuthGoogle: any;

    static async signIn(client_id: string, opt: LoginOpt = { scope: 'email' }): Promise<any> {
        return new Promise((resolve, reject) => {
            Utility.googleInitialize(this.PROVIDER_ID, client_id).then((auth2: any) => {
                this.oAuthGoogle = auth2;
                let promise = auth2.signIn(opt);
                promise.then((response: any) => {

                    let profile = auth2.currentUser.get().getBasicProfile();
                    let token: string = auth2.currentUser.get().getAuthResponse(true).access_token;
                    let backendToken: string = auth2.currentUser.get().getAuthResponse(true).id_token;
                    let user: SocialUser = {
                        id: profile.getId(),
                        name: profile.getName() || null,
                        email: profile.getEmail() || null,
                        photoUrl: profile.getImageUrl() || null,
                        firstName: profile.getGivenName() || null,
                        lastName: profile.getFamilyName() || null,
                        authToken: token,
                        provider: this.PROVIDER_ID,
                        idToken: backendToken,
                        authorizationCode: (response && response.code) ? response.code : ""
                    }
                    resolve(user);
                }, (closed: any) => {
                    reject('User cancelled login or did not fully authorize.');
                }).catch((err: any) => {
                    reject(err);
                });
            }).catch(err => {
                reject(err);
            });
        })

    }

    static getLoginStatus(): Promise<SocialUser> {
        return new Promise((resolve, reject) => {
            if (this.oAuthGoogle.isSignedIn.get()) {
                let profile = this.oAuthGoogle.currentUser.get().getBasicProfile();
                let token = this.oAuthGoogle.currentUser.get().getAuthResponse(true).access_token;
                let backendToken = this.oAuthGoogle.currentUser.get().getAuthResponse(true).id_token;

                let user: SocialUser = {
                    id: profile.getId(),
                    name: profile.getName() || null,
                    email: profile.getEmail() || null,
                    photoUrl: profile.getImageUrl() || null,
                    firstName: profile.getGivenName() || null,
                    lastName: profile.getFamilyName() || null,
                    authToken: token,
                    idToken: backendToken,
                }
                resolve(user);
            } else {
                reject('No user is currently logged in.');
            }
        });
    }

    static signOut(revoke?: boolean): Promise<any> {
        return new Promise((resolve, reject) => {
            let signOutPromise;
            if (revoke) {
                signOutPromise = this.oAuthGoogle.disconnect();
            } else {
                signOutPromise = this.oAuthGoogle.signOut();
            }

            signOutPromise.then((err: any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }).catch((err: any) => {
                reject(err);
            });
        });
    }
}