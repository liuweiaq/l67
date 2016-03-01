"use strict";

require.config({
	"baseUrl": "/l67/",
	paths:{
        "underscore":"bower/plugins/underscore/underscore-min",
        "backbone":"bower/plugins/backbone/backbone-min",
        "handlebars":"bower/plugins/handlebars/handlebars",
        "jquery":"bower/plugins/jquery/dist/jquery.min",
        "bootstrap-css":"bower/plugins/bootstrap/dist/css/bootstrap.min",
        "bootstrap":"bower/plugins/bootstrap/dist/js/bootstrap.min",
        "require-css":"bower/plugins/require-css/css.min",
        "ResponsiveSlides":"bower/plugins/ResponsiveSlides/responsiveslides",
        "ResponsiveSlides-css":"bower/plugins/ResponsiveSlides/responsiveslides"
	},
	shim:{
	    'backbone':{
	    	deps:['underscore']
	    },
	    'bootstrap':{
	    	deps:['jquery','require-css!bootstrap-css']
	    },
	    'ResponsiveSlides':{
	    	deps:['jquery']
	    }

	}
});