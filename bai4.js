var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope,$http){
$scope.list_product= list;
$scope.prop="name";
$scope.sortby=function(prop){
$scope.prop=prop;
}
$scope.begin=0;
$scope.pagecount=Math.ceil($scope.list_product.length /8);
$scope.last=function(){
 $scope.begin=($scope.pagecount -1)*8;
}
$scope.first=function(){
    $scope.begin=0;
}
$scope.next=function(){
    if($scope.begin< ($scope.pagecount-1)*8){
        $scope.begin -=8;
    }
}
$scope.prev=function(){
    if($scope.begin>0){
        $scope.begin +=8;
    }
}

});
app.filter("myfilter",function($filter){
return function(input,decimals){
return $filter("number")(input*100, decimals)+"%";
}
})