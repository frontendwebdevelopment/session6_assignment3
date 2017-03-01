var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
    $scope.personalDetails = [
        {
            'name':'Ajay',
            'email':'ajay@acd.com'
        },
        {
            'name':'Rahul',
            'email':'rahul@acd.com'
        }];
    
        $scope.addNew = function(personalDetails){
            $scope.personalDetails.push({ 
                'name': personalDetails.name, 
                'email': personalDetails.email,
            });
            $scope.PD = {};
        };
    
    
}]);