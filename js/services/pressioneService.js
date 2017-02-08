angular.module('misurazione').service('pressioneService', [ '$http', function( $http ){
    
    var backend = "http://localhost/pa/elenco.php";
    var onError = function(response)
        {console.log("Errore di chiamata: ", response)};

    var getPressione = function(ready){
        $http.get(backend).then(
            ready,
            onError);
    };

    var delPressione = function(id, ready){
        $http.get(backend+"?act=del&id="+id).then(
            ready,
            onError);
    };
    
    var addPressione = function(misurazione, ready){
        $http({
            url : backend,
            method : "POST",
            data : misurazione
//            header : {"content-type" : "application/json"}  $http.post(url, vm.misurazione).then(vm.populate);
            }).then(
            ready,
            onError);
    };
    
    
    return {
        getPressione : getPressione,
        delPressione : delPressione,
        addPressione : addPressione
    };
}]);

