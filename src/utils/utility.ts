declare let gapi: any, FB: any;

export class Utility {
    static locale = "en_US";
    static version: string = 'v4.0'

    static googleInitialize(provider_id: string, clientId: string, opt = { scope: 'email' }): Promise<void> {
        return new Promise((resolve, reject) => {
            this.loadScript(provider_id,
                'https://apis.google.com/js/platform.js',
                () => {
                    gapi.load('auth2', () => {
                        let thisObj: any = this;
                        thisObj.auth2 = gapi.auth2.init({
                            ...opt,
                            client_id: clientId
                        });

                        thisObj.auth2.then(() => {
                            resolve(thisObj.auth2);
                        }).catch((err: any) => {
                            reject(err);
                        });
                    });
                });
        });
    }

    static fbInitialize(provider_id: string, clientId: string, opt = { scope: 'email,public_profile' }): Promise<void> {
        return new Promise((resolve, reject) => {
            this.loadScript(provider_id,
                `//connect.facebook.net/${this.locale}/sdk.js`,
                () => {
                    FB.init({
                        appId: clientId,
                        autoLogAppEvents: true,
                        cookie: true,
                        xfbml: true,
                        version: this.version
                    });
                    // FB.AppEvents.logPageView(); #FIX for #18
                    resolve(FB);
                });
        });
    }

    static loadScript(id: string, src: string, onload: any, async = true, inner_text_content = ''): void {
        // get document if platform is only browser
        if (document && !document.getElementById(id)) {
            let signInJS = document.createElement('script');
            signInJS.async = async;
            signInJS.src = src;
            signInJS.onload = onload;

            if (inner_text_content) // LinkedIn
                signInJS.text = inner_text_content;

            document.head.appendChild(signInJS);
        }
    }
}