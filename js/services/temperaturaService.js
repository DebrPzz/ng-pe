angular.module('misurazione').service('temperaturaService', [ '$http', function( $http ){
    
    var backend = "http://localhost/pa/temperatura.php";
    var onError = function(response)
        {console.log("Errore di chiamata: ", response)};

    var getTemperatura = function(ready){
        $http.get(backend).then(
            ready,
            onError);
    };

    var delTemperatura = function(id, ready){
        $http.get(backend+"?act=del&id="+id).then(
            ready,
            onError);
    };
    
    var addTemperatura = function(misurazione, ready){
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
        getTemperatura : getTemperatura,
        delTemperatura : delTemperatura,
        addTemperatura : addTemperatura
    };
}]);

