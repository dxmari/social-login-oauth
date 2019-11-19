"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.googleInitialize = function (provider_id, clientId, opt) {
        var _this = this;
        if (opt === void 0) { opt = { scope: 'email' }; }
        return new Promise(function (resolve, reject) {
            _this.loadScript(provider_id, 'https://apis.google.com/js/platform.js', function () {
                gapi.load('auth2', function () {
                    var thisObj = _this;
                    thisObj.auth2 = gapi.auth2.init(__assign({}, opt, { client_id: clientId }));
                    thisObj.auth2.then(function () {
                        resolve(thisObj.auth2);
                    }).catch(function (err) {
                        reject(err);
                    });
                });
            });
        });
    };
    Utility.fbInitialize = function (provider_id, clientId, opt) {
        var _this = this;
        if (opt === void 0) { opt = { scope: 'email,public_profile' }; }
        return new Promise(function (resolve, reject) {
            _this.loadScript(provider_id, "//connect.facebook.net/" + _this.locale + "/sdk.js", function () {
                FB.init({
                    appId: clientId,
                    autoLogAppEvents: true,
                    cookie: true,
                    xfbml: true,
                    version: _this.version
                });
                // FB.AppEvents.logPageView(); #FIX for #18
                resolve(FB);
            });
        });
    };
    Utility.loadScript = function (id, src, onload, async, inner_text_content) {
        if (async === void 0) { async = true; }
        if (inner_text_content === void 0) { inner_text_content = ''; }
        // get document if platform is only browser
        if (document && !document.getElementById(id)) {
            var signInJS = document.createElement('script');
            signInJS.async = async;
            signInJS.src = src;
            signInJS.onload = onload;
            if (inner_text_content) // LinkedIn
                signInJS.text = inner_text_content;
            document.head.appendChild(signInJS);
        }
    };
    Utility.locale = "en_US";
    Utility.version = 'v4.0';
    return Utility;
}());
exports.Utility = Utility;
//# sourceMappingURL=utility.js.map