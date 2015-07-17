(function() {
	"use strict";

	function setDefaultRoutes(app) {
		app.route("/mcmarveluniverse").get(function(req, res) {
			res.render("index.html");
		});
	}
	module.exports = setDefaultRoutes;
}());
