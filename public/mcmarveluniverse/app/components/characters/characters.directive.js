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
	angular.module( 'app.core' ).directive( "characters", fnDirective );
	/**
	 * @ngdoc controller
	 * @name fnController
	 * @description
	 * This is the controller for this header
	 */
	angular.module("app.core").controller("charactersController", [fnController]);
	//the directive
	function fnDirective(){
		return{
			'restrict':"AE",
			'replace': false,
			'templateUrl': "mcmarveluniverse/app/components/characters/characters.html",
			'controller': "charactersController",
			'controllerAs': "vm"
		};
	}
	//the controller
	function fnController(){
		var vm = this;
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
