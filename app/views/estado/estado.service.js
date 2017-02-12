(function () {
    'use strict';

    angular.module('pdProva')
        .service('EstadoService', EstadoService);

    function EstadoService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('estadoController');


            ps.listaEntidadeStorageRef = 'listaEstado';
            //ps.metodoPesquisar = 'pesquisarPessoas';


            return ps;
        }

    }
})();