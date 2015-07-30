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
	angular.module( 'app.core' ).directive( "character", fnDirective );
	/**
	 * @ngdoc controller
	 * @name fnController
	 * @description
	 * This is the controller for this header
	 */
	angular.module("app.core").controller("characterController", ['$scope', fnController]);
	//the directive
	function fnDirective(){
		return{
			'restrict':"AE",
			'replace': true,
			'scope' : { hero : '=' },
			'templateUrl': "mcmarveluniverse/app/components/character/character.html",
			'controller': "characterController",
			'controllerAs': "vm"
		};
	}
	//the controller
	function fnController( $scope ){
		var vm = this;
		vm.hero = $scope.hero;
		vm.showImage = false;
		vm.showPlaceholder = true;
		vm.showHeroImage = showHeroImage;
		vm.hideHeroImage = hideHeroImage;

		function showHeroImage(){
			cl( 'Showing' );
			vm.showImage = true;
			vm.showPlaceholder = false;
		};

		function hideHeroImage(){
			cl( 'Hiding' );
			vm.showImage = false;
			vm.showPlaceholder = true;
		};
	}
})();
