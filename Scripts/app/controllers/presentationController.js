(function (w) {

    function Controller ($scope, titleService, presentations, $routeParams) {
        var defaultTitle = 'Presentations - JeremyLikness.com';

        if (angular.isDefined($routeParams.presentationId)) {
            $scope.presentationId = Number($routeParams.presentationId);
            if (presentations.length > $scope.presentationId) {
                titleService.setTitle(presentations[$scope.presentationId].title + " - JeremyLikness.com");
            }
            else {
                titleService.setTitle(defaultTitle);
            }
        }
        else {
            $scope.presentationId = -1;
            titleService.setTitle(defaultTitle);
        }

        $scope.presentations = presentations;
    }

    Controller.$inject = ['$scope', 'titleService', 'presentations', '$routeParams'];

    // this is needed as the route is passed the constructor's name so we expose
    // it globally. Note you can also add parameter "controllerAs" to the route
    // but you can also define the controller in the template as shown with publications
    w.PresentationController = Controller;

})(window);