var app=angular.module("myapp",[]);
app.controller("myctrl",function($scope,$http){
$scope.list_product= list;
});
app.filter("myfilter",function($filter){
return function(input,decimals){
return $filter("number")(input*100, decimals)+"%";
}
})