(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdAutoComplete', pdAutoComplete);


    function pdAutoComplete() {
        return {
            restrict: 'AE',
            require:'^form',
            templateUrl:'arquitetura/directives/pd-auto-complete/pd-auto-complete.html',
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

            $scope.inputName = 'pdInputText' + $scope.$id;

        }
    }

})();

