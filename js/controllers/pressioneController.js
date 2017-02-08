angular.module('misurazione').controller('pressioneController', ["pressioneService",
    function( pressioneService ) {
        var vm = this;
        
        vm.populate = function(response){
            console.log(response.data);
            vm.list = response.data;
        };

        vm.init = function(){
            vm.clear();
            pressioneService.getPressione(vm.populate);
       };
       
       vm.removeRow = function(id){
           pressioneService.delPressione(id, vm.populate);
       };

         vm.clear = function(){
           vm.misurazione = {
               datamisurazione: null, 
               sistolica: null, 
               diastolica: null, 
               peso: null
           };
       };


       vm.addRow = function(){
       var ok = true;
//           angular.forEach(vm.misurazione, function(v,k){
//               if(v==null){ this=false; return false; }
//           }, ok);
           if(ok){
                pressioneService.addPressione(vm.misurazione, vm.populate);
//                vm.clear();
            }
       };
       
       
        vm.init();
}]);
