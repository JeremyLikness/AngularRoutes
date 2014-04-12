(function (app) {

    function Controller (titleService, publications, $route) {
        this.titleService = titleService;
        titleService.setTitle($route.current.title);
        this.publications = publications;
        this.dice = $route.current.locals.brokenPromise;
    }

    Controller.$inject = ['titleService', 'publications', '$route'];

    app.controller("publicationCtrl", Controller);

})(angular.module("myApp"));