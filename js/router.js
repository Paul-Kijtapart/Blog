define([
    'jquery',
    'backbone'
    // 'views/projects/list',
    // 'views/users/list'
], function($, Backbone) {
    var AppRouter = Backbone.Router.extend({
        // Define actions that are triggered when certain URL fragments are matched, 
        // and provide a routes hash that pairs routes to actions.
        routes: {
            "profile": "showProfile", // #about
            "hobbies": "showHobbies", // #projects
            "blog(/*path)": "blog", // #blog
        },
        initialize: function() {

        },
        showProfile: function() {
            console.log("Router: showProfile");
        },
        showHobbies: function() {
            console.log("Router: showHobbies");
        },
        blog: function(path) {
            console.log("Router: blog" + path);
        }
    });

    return AppRouter;
});
