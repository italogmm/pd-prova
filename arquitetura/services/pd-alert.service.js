(function () {
    'use strict';

    angular
        .module('pdProva')
        .service('PdAlertService', PdAlertService);


    function PdAlertService(toastr) {
        this.showSuccess = showSuccess;
        this.showError = showError;

        function showSuccess(mensagem) {
            toastr.success(mensagem);
        }

        function showError(mensagem) {
            toastr.error(mensagem);
        }
    }

})();

