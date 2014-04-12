(function (app) {

    var privateSetTitle;

    function TitleService($rootScope) {
        privateSetTitle = function (title) {
            $rootScope.pageTitle = title;
        };
    }

    TitleService.prototype.setTitle = function (title) {
        privateSetTitle(title);
    }

    app.service("titleService", TitleService);
})(angular.module("myApp"));