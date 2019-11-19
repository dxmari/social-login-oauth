import { Utility } from './../utils/utility';
import { SocialUser, LoginOpt } from './../interfaces/user.interface';

export class FacebookLoginProvider extends Utility {
    public static readonly PROVIDER_ID: string = 'FACEBOOK';
    public static oAuthFB: any;

    static async signIn(client_id: string, opt: LoginOpt = { scope: 'email' }): Promise<any> {
        return new Promise((resolve, reject) => {
            Utility.fbInitialize(this.PROVIDER_ID, client_id).then((FB: any) => {
                this.oAuthFB = FB;
                this.oAuthFB.login((response: any) => {
                    if (response.authResponse) {
                        let authResponse = response.authResponse;
                        let fields = 'name,email,picture,first_name,last_name';
                        this.oAuthFB.api(`/me?fields=${fields}`, (fbUser: any) => {
                            let user: SocialUser = {
                                id: fbUser.id,
                                name: fbUser.name || null,
                                email: fbUser.email || null,
                                photoUrl: 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal',
                                firstName: fbUser.first_name || null,
                                lastName: fbUser.last_name || null,
                                authToken: authResponse.accessToken,
                                provider: this.PROVIDER_ID,
                                facebook: fbUser
                            }
                            resolve(user);
                        })

                    } else {
                        reject('User cancelled login or did not fully authorize.');
                    }
                }, opt);
            }).catch(err => {
                reject(err);
            });
        })

    }

    static getLoginStatus(): Promise<SocialUser> {
        return new Promise((resolve, reject) => {
            this.oAuthFB.login((response: any) => {
                if (response.status === 'connected') {
                    let authResponse = response.authResponse;
                    let fields = 'name,email,picture,first_name,last_name';
                    this.oAuthFB.api(`/me?fields=${fields}`, (fbUser: any) => {
                        let user: SocialUser = {
                            id: fbUser.id,
                            name: fbUser.name || null,
                            email: fbUser.email || null,
                            photoUrl: 'https://graph.facebook.com/' + fbUser.id + '/picture?type=normal',
                            firstName: fbUser.first_name || null,
                            lastName: fbUser.last_name || null,
                            authToken: authResponse.accessToken,
                            provider: this.PROVIDER_ID,
                            facebook: fbUser
                        }
                        resolve(user);
                    })

                } else {
                    reject('User cancelled login or did not fully authorize.');
                }
            });
        });
    }

    static signOut(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.oAuthFB.logout((response: any) => {
                resolve();
            });
        });
    }
}