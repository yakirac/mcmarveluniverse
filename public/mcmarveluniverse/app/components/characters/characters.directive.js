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

		vm.heros = [
		    {
		        name : 'Black Widow',
		        holderImage : 'holder.js/293x210?text=Black Widow&theme=vine',
		        image : ''
		    },
		    {
		        name : 'Chores Macgillicudy',
		        holderImage : 'holder.js/293x210?text=Chores Macgillicudy',
		        image : ''
		    },
		    {
		        name : 'Daredevil',
		        holderImage : 'holder.js/293x210?text=Daredevil&theme=vine',
		        image : ''
		    },
		    {
		        name : 'Deadpool',
		        holderImage : 'holder.js/293x210?text=Deadpool',
		        image : ''
		    },
		    {
		        name : 'Gambit',
		        holderImage : 'holder.js/293x210?text=Gambit',
		        image : ''
		    },
		    {
		        name : 'Hulk',
		        holderImage : 'holder.js/293x210?text=Hulk&theme=vine',
		        image : ''
		    },
		    {
		        name : 'Lego Iron Man',
		        holderImage : 'holder.js/293x210?text=Lego Iron Man',
		        image : ''
		    },
		    {
		        name : 'Punisher',
		        holderImage : 'holder.js/293x210?text=Punisher&theme=vine',
		        image : ''
		    },
		    {
		        name : 'Silver Samurai',
		        holderImage : 'holder.js/293x210?text=Silver Samurai&theme=vine',
		        image : ''
		    },
		    {
		        name : 'Wasp',
		        holderImage : 'holder.js/293x210?text=Wasp',
		        image : ''
		    }
		];
	}
})();
