(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('IndexController', IndexController);


    function IndexController($scope, $rootScope) {
        var vm = this;

        $rootScope.listaProdutos = [];

        vm.salvar = salvar;

        $scope.employee = {id: 0};
        vm.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
          "Engineering",
            "Marketing",
            "Finance"
        ];

        $scope.programmingLanguages = [
            "C",
            "C++",
            "Finance",
            "Java"
        ];

        iniciar();

        function iniciar() {

        }

        function salvar(entidade) {
            console.log(entidade.nome);
        }
    }

})();

