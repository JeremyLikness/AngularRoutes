(function (app) {

    function Controller (titleService, publications, $state) {
        var defaultTitle = $state.current.data.title;

        this.dice = $state.$current.locals["detail@"].brokenPromise;

        if (!angular.isDefined($state.params.publicationId) || $state.params.publicationId === '') {
            this.publication = null;
            titleService.setTitle(defaultTitle);
        } else {
            var idx = Number($state.params.publicationId);
            if (idx < publications.length) {
                this.publication = publications[idx];
                titleService.setTitle(this.publication.title);
            }
            else {
                this.publication = null;
                titleService.setTitle(defaultTitle);
            }
        }
    }

    Controller.$inject = ['titleService', 'publications', '$state'];

    app.controller("publicationDtlCtrl", Controller);

})(angular.module("myApp"));