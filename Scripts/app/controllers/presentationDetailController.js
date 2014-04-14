(function (app) {

    function Controller (titleService, presentations, $stateParams) {
        var defaultTitle = 'Presentations - JeremyLikness.com';

        if (!angular.isDefined($stateParams.presentationId) || $stateParams.presentationId === '') {
            this.presentation = null;
            titleService.setTitle(defaultTitle);
        } else {
            var idx = Number($stateParams.presentationId);
            if (idx < presentations.length) {
                this.presentation = presentations[idx];
                titleService.setTitle(this.presentation.title);
            }
            else {
                this.presentation = null;
                titleService.setTitle(defaultTitle);
            }
        }
    }

    Controller.$inject = ['titleService', 'presentations', '$stateParams'];

    app.controller("presentationDtlCtrl", Controller);

})(angular.module("myApp"));