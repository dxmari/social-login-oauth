"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./providers/index");
var GoogleService = /** @class */ (function () {
    function GoogleService() {
    }
    GoogleService.signIn = function (clientId, opt) {
        return index_1.GoogleLoginProvider.signIn(clientId, opt);
    };
    GoogleService.getLoginStatus = function () {
        return index_1.GoogleLoginProvider.getLoginStatus();
    };
    GoogleService.signOut = function (revoke) {
        return index_1.GoogleLoginProvider.signOut(revoke);
    };
    return GoogleService;
}());
exports.GoogleService = GoogleService;
var FacebookService = /** @class */ (function () {
    function FacebookService() {
    }
    FacebookService.signIn = function (clientId, opt) {
        return index_1.FacebookLoginProvider.signIn(clientId, opt);
    };
    FacebookService.getLoginStatus = function () {
        return index_1.FacebookLoginProvider.getLoginStatus();
    };
    FacebookService.signOut = function (revoke) {
        return index_1.FacebookLoginProvider.signOut();
    };
    return FacebookService;
}());
exports.FacebookService = FacebookService;
//# sourceMappingURL=index.js.map