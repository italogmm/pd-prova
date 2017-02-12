(function () {
    'use strict';

    angular
        .module('pdProva')
        .controller('CadastroEstadoController', CadastroEstadoController);


    function CadastroEstadoController(EstadoService,$stateParams,PdStorageService) {
        var vm = this;

        vm.pdService = EstadoService.getPdService();

        activate();

        function activate() {
            if($stateParams.id){
                var listaEstado = vm.pdService.provider;

                for(var x = 0, y = listaEstado.length; x < y; x ++){
                    if(listaEstado[x].id.toString() === $stateParams.id){
                        vm.pdService.entidade = listaEstado[x];
                    }
                }
            }
        }
    }

})();

