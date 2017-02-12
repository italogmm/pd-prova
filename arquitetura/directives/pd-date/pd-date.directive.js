(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdDate', pdDate);


    function pdDate() {
        return {
            restrict: 'AE',
            require:'^form',
            templateUrl:'arquitetura/directives/pd-date/pd-date.html',
            link: link,
            scope: {
                label:'@',
                ngModel:'=',
                ngRequired:'=',
                colspan:'@'
            }
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.classColSpan = 'col-md-'+ ($scope.colspan || 3);

            $scope.inputName = 'pdDate' + $scope.$id;
        }
    }

})();

