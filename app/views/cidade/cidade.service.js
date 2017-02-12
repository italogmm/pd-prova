(function () {
    'use strict';

    angular.module('pdProva')
        .service('CidadeService', CidadeService);

    function CidadeService(PdService,$state) {
        this.getPdService = getPdService;

        function getPdService() {
            var ps = new PdService('cidadeController');

            ps.listaEntidadeStorageRef = 'listaCidade';

            ps.provider = ps.getAll(ps.listaEntidadeStorageRef);

            ps.gridOptions = {
                data: ps.provider,
                columnDefs: [
                    {name: 'Nome', field: 'nome'},,
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
                $state.go('cadastroCidade', {id:index});
            }
            return ps;
        }

    }
})();