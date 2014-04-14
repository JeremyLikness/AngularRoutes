(function (app) {

    function Controller ($location) {

        this.$location = $location;

        this.links = [
            {
                title: 'Presentations',
                path: '/presentations/'
            },
            {
                title: 'Presentations with Search',
                path: '/presentations/',
                search: { foo: "bar"}
            },
            {
                title: 'Windows Runtime',
                path: '/presentations/1'
            },
            {
                title: 'Publications',
                path: '/publications/'
            }
        ];
    }

    Controller.$inject = ['$location'];

    Controller.prototype.navigate = function (link) {
        this.$location.path(link.path);
        if (angular.isDefined(link.search)) {
            this.$location.search(link.search);
        }
        else {
            this.$location.search({});
        }
    };

    app.controller("navigationCtrl", Controller);

})(angular.module("myApp"));
