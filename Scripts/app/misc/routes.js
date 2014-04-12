(function (app){

    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/presentations', {
                templateUrl: '/AngularRoutes/Views/presentations.html',
                controller: 'PresentationController',
                reloadOnSearch: false,
                resolve: {
                    ready: ['$q', '$timeout', function ($q, $timeout) {
                        var ready = $q.defer();
                        $timeout(ready.resolve, 1000);
                        return ready.promise;
                    }]
                }
            })
            .when('/presentations/:presentationId', {
                templateUrl: '/AngularRoutes/Views/presentations.html',
                controller: 'PresentationController'
            })
            .when('/publications', {
                templateUrl: '/AngularRoutes/Views/publications.html',
                title: 'Publications - JeremyLikness.com',
                resolve: {
                    brokenPromise: ['$q', '$timeout', function ($q, $timeout) {
                        var broken = $q.defer();
                        $timeout(function () {
                            var dice = Math.random();
                            if (dice < 0.5) {
                                broken.reject(dice);
                            }
                            else {
                                broken.resolve(dice);
                            }
                        }, 0);
                        return broken.promise;
                    }]
                }
            });

        $locationProvider.html5Mode(false);
    }]);

    app.run(['$rootScope', '$route', function ($rootScope, $route) {

        // appears to be a defect that doesn't load routes properly if
        // $route is not in a run block, that's why it's incldued but
        // not referenced here

        // map to various route events

        $rootScope.$on('$routeChangeStart', function (sender, args) {
            console.log("Routing to template " + args.templateUrl);
        });

        $rootScope.$on('$routeChangeSuccess', function (sender, args) {
            console.log("Routed to template " + args.loadedTemplateUrl);
        });

        $rootScope.$on('$routeChangeError', function (sender, args) {
            console.log("Promises were rejected for " + args.loadedTemplateUrl);
        });

        $rootScope.$on('$routeUpdate', function (sender, args) {
            console.log("Search parameters updated but controller reused: " + args.params["foo"]);
        })

        $rootScope.pageTitle = "JeremyLikness.com";

    }]);
})(angular.module("myApp"));