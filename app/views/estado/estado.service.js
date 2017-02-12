(function () {
    'use strict';

    angular.module('pdProva')
        .service('EstadoService', EstadoService);

    function EstadoService(PdService) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('estadoController');

            ps.listaEntidadeStorageRef = 'listaEstado';
            ps.provider = ps.getAll(ps.listaEntidadeStorageRef);

            ps.gridOptions = {
                data: ps.provider,
                enableColumnMenus: false,
                enableRowSelection:false
            };

            return ps;
        }

    }
})();