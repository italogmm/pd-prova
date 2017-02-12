(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdGrid', pdGrid);


    function pdGrid() {
        return {
            restrict: 'AE',
            templateUrl:'arquitetura/directives/pd-grid/pd-grid.html',
            link: link,
            scope: {
                label:'@',
                ngModel:'=',
                colspan:'@',
                service:'=',
                exibeBotaoEditar:'=',
                exibeBotaoExcluir:'=',
            }
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.classColSpan = 'col-md-'+ ($scope.colspan || 3);

            $scope.inputName = 'pdInputText' + $scope.$id;

        }
    }

})();

