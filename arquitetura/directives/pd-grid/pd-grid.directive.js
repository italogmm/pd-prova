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
                exibeBotoes:'=',
            }
        };

        function link($scope, element, attrs, formCtrl) {
            $scope.formCtrl = formCtrl;

            $scope.classColSpan = 'col-md-'+ ($scope.colspan || 3);

            $scope.inputName = 'pdInputText' + $scope.$id;


            if($scope.exibeBotoes){
                $scope.service.gridOptions.columnDefs.push({
                    name: '', field: 'excluir', width: 80,
                    cellTemplate: 'arquitetura/template/cell-template-botoes.html',
                    onClickExcluir: $scope.service.excluir,
                    onClickEditar: $scope.service.editar,

                })
            }
        }
    }

})();

