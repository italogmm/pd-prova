(function () {
    'use strict';

    angular.module('pdProva')
        .service('EstadoService', EstadoService);

    function EstadoService(PdService,$state) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('estadoController');

            ps.listaEntidadeStorageRef = 'listaEstado';
            ps.provider = ps.getAll(ps.listaEntidadeStorageRef);

            ps.gridOptions = {
                data: ps.provider,
                columnDefs: [
                    {name: 'Nome', field: 'nome'},
                    {
                        name: 'Data cadastro',
                        field: 'dataCadastro',
                        width: 150,
                        cellTemplate: 'arquitetura/template/cell-template-date.html'
                    },
                ],
                enableColumnMenus: false,
                enableRowSelection:false
            };

            ps.editar = editar;

            function editar(index) {
                $state.go('cadastroEstado', {id:index});
            }

            return ps;

        }

    }
})();