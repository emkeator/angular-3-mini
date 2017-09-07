angular.module('myApp').controller('productsCtrl', function( $scope, $stateParams, productsSrvc ) {
  if ( $stateParams.id === 'shoes' ) {
    $scope.productData = productsSrvc.shoeData;
  } else if ( $stateParams.id === 'socks' ) {
    $scope.productData = productsSrvc.sockData;
  }
});