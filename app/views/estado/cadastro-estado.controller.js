(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroEstadoController', CadastroEstadoController);


    //PdAlertService
    function CadastroEstadoController($scope, EstadoService) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();

        activate();

        function activate() {
        }
    }

})();

