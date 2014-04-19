(function (app){

    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
        function($stateProvider, $locationProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise(function($injector, $location) {
            $location.path("/");
        });

        $stateProvider
            .state('presentation', {
                url: '/presentations/{presentationId:[0-9]*}',
                views: {
                    'list': {
                        templateUrl: 'Views/presentationlist.html',
                        controller: ['$scope', 'presentations', '$location', function ($scope, presentations, $location) {
                            $scope.presentations = presentations;
                            $scope.navigate = function (idx) {
                                $location.path('/presentations/' + idx);
                            }
                        }]
                    },
                    'detail': {
                        templateUrl: 'Views/presentationdetail.html'
                    }
                },
                onEnter: function () {
                    console.log("Entered presentation state.");
                },
                onExit: function () {
                    console.log("Exited presentation state.");
                }
            })
            .state('publication', {
                url: '/publications/{publicationId:[0-9]*}',
                data: {
                    title: 'Publications - JeremyLikness.com'
                },
                views: {
                    'list': {
                        templateUrl: 'Views/publicationlist.html',
                        controller: ['$scope', 'publications', '$location', function ($scope, publications, $location) {
                            $scope.publications = publications;
                            $scope.navigate = function (idx) {
                                $location.path('/publications/' + idx);
                            }
                        }]
                    },
                    'detail': {
                        templateUrl: 'Views/publicationdetail.html',
                        resolve: {
                            brokenPromise: ['$q', '$timeout', function ($q, $timeout) {
                                var broken = $q.defer();
                                $timeout(function () {
                                    var dice = Math.random();
                                    if (dice < 0.5) {
                                        broken.reject(dice);
                                    }
                                    else {
                                        $timeout(function () {
                                            broken.resolve(dice);
                                        }, 1000);
                                    }
                                }, 0);
                                return broken.promise;
                            }]
                        }
                    }
                },
                onEnter: function () {
                    console.log("Entered publication state.");
                },
                onExit: function () {
                    console.log("Exited publication state.");
                }
            });

        $locationProvider.html5Mode(false);
    }]);

    app.run(['$rootScope', function ($rootScope) {

        $rootScope.pageTitle = "JeremyLikness.com";
        $rootScope.status = "Initializing...";
        $rootScope.loading = false;

        $rootScope.$on('$stateChangeStart', function (e, toState, toParams) {
            $rootScope.status = "State change requested...";
            $rootScope.loading = true;
        });

        $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams) {
            $rootScope.status = "State change successful.";
            $rootScope.loading = false;
        });

        $rootScope.$on('$stateChangeError', function (e, toState, toParams) {
            $rootScope.status = "State change was not successful.";
            $rootScope.loading = false;
        });

        $rootScope.$on('$viewContentLoading', function (e, viewConfig) {
            $rootScope.status += " ..view content loading...";
        });

        $rootScope.$on('$viewContentLoaded', function (e, viewConfig) {
            $rootScope.status += " ..view content loaded...";
        });

    }]);
})(angular.module("myApp"));