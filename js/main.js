require.config({
    baseUrl: 'js/lib',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery-3.1.0',
        underscore: 'underscore',
        backbone: 'backbone',
        router: '../router',
        app: '../app'
    },
    //Remember: only use shim config for non-AMD scripts,
    //scripts that do not already call define(). The shim
    //config will not work correctly if used on AMD scripts,
    //in particular, the exports and init config will not
    //be triggered, and the deps config will be confusing
    //for those cases.
    shim: {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'router': {
            deps: ['underscore', 'jquery', 'backbone'],
            exports: 'Router'
        }
    }
});

// Start the main app logic.
require(['backbone', 'app', 'router', '../util/form'],
    function(Backbone, AppView, AppRouter, Form) {
        new AppRouter();
        Backbone.history.start();

        new Form();

        // Initialize the application view
        new AppView();
    });
