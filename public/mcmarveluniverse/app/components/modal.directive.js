;(function(){
	'use strict';
	/**
	* @ngdoc directive
	* @name global.directive:header.directive
	* @scope
	* @restrict E
	*
	* @description
	* this will output the global header
	*
	*/
	angular.module( 'app.core' ).directive( "charactermodal", [ fnDirective ] );
	/**
	 * @ngdoc controller
	 * @name fnController
	 * @description
	 * This is the controller for this header
	 */
	angular.module("app.core").controller( "cModalController", [ "$scope", "$modal", fnController ] );
	//the directive
	function fnDirective(){
		return{
			'restrict':"AE",
			'replace': false,
			'scope' : { hero : '=', sh : '=' },
			'templateUrl': "mcmarveluniverse/app/components/character/cModalTest.html",
			'controller': "cModalController",
			'controllerAs': "vm"
		};
	}
	//the controller
	function fnController( $scope, $modal ){
		var vm = this;

		$scope.$watch('sh', function(n, o, scope){
			vm.showModal( n );
		});

		vm.showModal = function( show )
		{
			if( show )
			{
				var modalInstance = $modal.open({
				      animation: false,
				      templateUrl: "mcmarveluniverse/app/components/character/charactermodal.html",
					  controller: 'characterModalController',
				      size: 'lg',
				      resolve: {
						  heroInfo : function(){
							  return { hero : $scope.hero, parentScope : $scope };
						  }
					  }
			  	});
			}
		};
	}

	angular.module("app.core").controller( "characterModalController", [ "$scope", "$modalInstance", "heroInfo", fnModalController ] );

	function fnModalController( $scope, $modalInstance, heroInfo ){
		$scope.hero = heroInfo.hero;

		$scope.cls = function(){
			heroInfo.parentScope.sh = false;
			$modalInstance.dismiss('cancel');
		};
	}
})();
