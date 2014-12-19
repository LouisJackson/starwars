function starshipController($scope, $http, $filter) {
	$scope.numb = 0;
	$scope.spaceships;
	$scope.chosenSpaceships;

	$http.get('js/data.json').success (function(data){
        	$scope.spaceships = data;
        	$scope.chosenSpaceships = $scope.spaceships;
    });

   $scope.filterSpaceship = function(myAlliance,myConstructor,myClass,myMovie) {
      $scope.chosenSpaceships = $filter('filter')($scope.spaceships, {'alliance':myAlliance},false|undefined);
      $scope.chosenSpaceships = $filter('filter')($scope.chosenSpaceships, {'manufacturer':myConstructor},false|undefined);
      $scope.chosenSpaceships = $filter('filter')($scope.chosenSpaceships, {'type': myClass},false|undefined);
      $scope.chosenSpaceships = $filter('filter')($scope.chosenSpaceships, {'movie': myMovie},false|undefined);
      $scope.numb = 0;
   };

   $scope.updateSpaceship = function(number) {
      if (number == 1) {
         $scope.numb = ($scope.numb + 1)%($scope.chosenSpaceships.length);
      }
      else {
         if ($scope.numb == 0) {
            $scope.numb = $scope.chosenSpaceships.length-1;
         }
         else {
            $scope.numb--;
         }
      }
   }

}