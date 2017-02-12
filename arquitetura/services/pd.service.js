(function () {
    'use strict';

    angular.module('pdProva')
        .service('PdService', PdService);


    function PdService($http,PdStorageService,PdAlertService) {
        return function (controller) {
            var self = this;

            self.controller = controller;

            self.entidade = {};

            self.providerStorageName= '';

            self.provider = [];

            self.metodoSalvar = 'salvar';
            self.metodoExcluir = 'excluir';
            self.metodoPesquisar = 'pesquisar';

            self.listaStorageEntidade= '';

            self.salvar = salvar;
            self.excluir = excluir;
            self.limpar = limpar;
            self.pesquisar = pesquisar;

            function salvar() {
                var listaEntidadeStorageRef = self.listaEntidadeStorageRef;
                var provider = PdStorageService.get(listaEntidadeStorageRef) || [];

                for(var x = 0, y = provider.length; x < y; x ++){
                    if(provider[x].nome === self.entidade.nome){
                        PdAlertService.showError('Ja existe um registro com esse nome');
                        return;
                    }
                }

                var id = generateId(provider);
                self.entidade.id = id;

                provider.push(self.entidade);


                PdStorageService.set(listaEntidadeStorageRef, provider);
                self.limpar();
                PdAlertService.showSuccess('Cadastro realizado com sucesso');

            }

            function excluir() {


            }

            function limpar() {
                self.entidade = {};
            }

            function pesquisar() {
                return $http.post('rest/'+self.controller+'/'+self.metodoPesquisar, self.entidade)
                    .then(pesquisarResult);

                function pesquisarResult(response) {
                    self.provider = response.data;

                    return response.data;
                }
            }

            function generateId(provider) {
                if(provider.length === 0){
                    return 1;
                }else{
                    var idInc = provider[provider.length-1].id;
                    return ++idInc;
                }
            }
        };
    }
})();