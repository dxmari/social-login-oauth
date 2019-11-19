export interface SocialUser {
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
}
export interface LoginOpt {
    /**
     * Facebook FB.login options: https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11.
     */
    auth_type?: string;
    scope?: string;
    return_scopes?: boolean;
    enable_profile_selector?: boolean;
    profile_selector_ids?: string;
    /**
     * Google gapi.auth2.ClientConfig: \
     * https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig.
     */
    client_id?: string;
    cookie_policy?: string;
    fetch_basic_profile?: boolean;
    hosted_domain?: string;
    openid_realm?: string;
    ux_mode?: string;
    redirect_uri?: string;
    offline_access?: boolean;
    prompt?: string;
    login_hint?: string;
}
//# sourceMappingURL=user.interface.d.ts.map