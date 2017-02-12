(function () {
    'use strict';

    angular
        .module('pdProva')
        .directive('pdSelect', pdSelect);


    function pdSelect() {
        return {
            restrict: 'AE',
            require:'^form',
            templateUrl:'arquitetura/directives/angular-course-select/pd-select.directive.html',
            link: link,
            scope: {
                label:'@',
                ngModel:'=',
                ngRequired:'=',
                colspan: '@',
                provider: '=',
                propriedadeValor:'@',
                propriedadeDescricao:'@'
            }
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.classColSpan = 'col-md-' + ($scope.colspan || 3);

            $scope.propriedadeValor = $scope.propriedadeValor || 'valor';
            $scope.propriedadeDescricao = $scope.propriedadeDescricao || 'descricao';

            $scope.inputName = 'angularSelect' + $scope.$id;
        }
    }

})();

