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
	angular.module( 'app.core' ).directive( "characterModal", [ fnDirective ] );
	/**
	 * @ngdoc controller
	 * @name fnController
	 * @description
	 * This is the controller for this header
	 */
	angular.module("app.core").controller( "characterModalController", [ "$scope", "heroService", "$modal", fnController ] );
	//the directive
	function fnDirective(){
		return{
			'restrict':"AE",
			'replace': true,
			'scope' : { hero : '=' },
			'templateUrl': "mcmarveluniverse/app/components/character/charactermodal.html",
			'controller': "characterController",
			'controllerAs': "vm"
		};
	}
	//the controller
	function fnController( $scope, heroService, $modal ){
		var vm = this;
		vm.openModal = openModal;

		function openModal( hero ){
			$modal.open({
		      animation: true,
		      templateUrl: "mcmarveluniverse/app/components/character/charactermodal.html",
			  /*controller: 'ModalInstanceCtrl',*/
		      size: 'lg',
		      resolve: {}
		  });
		}
	}
})();
