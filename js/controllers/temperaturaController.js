angular.module('misurazione').controller('temperaturaController', ["temperaturaService",
    function( temperaturaService ) {
        var vm = this;
        
        vm.pop = function(response){
            console.log(response.data);
            vm.val = response.data;
        };

        vm.init = function(){
            vm.clear();
            temperaturaService.getTemperatura(vm.pop);
       };
       
       vm.removeRow = function(id){
           temperaturaService.delTemperatura(id, vm.pop);
       };

         vm.clear = function(){
           vm.misurazione = {
               datamisurazione: null,
               valore: null
           };
       };


       vm.addRow = function(){
       var ok = true;
//           angular.forEach(vm.misurazione, function(v,k){
//               if(v==null){ this=false; return false; }
//           }, ok);
           if(ok){
                temperaturaService.addTemperatura(vm.misurazione, vm.pop);
//                vm.clear();
            }
       };
       
       
        vm.init();
}]);
