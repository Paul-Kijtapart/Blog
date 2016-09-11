define([
    'jquery', // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone' // lib/backbone/backbone
], function($, _, Backbone) {
    var userModel = Backbone.Model.extend({
        url: "../../documents/User.json",
        defaults: function({
            image: "",
            name: "",
            about: "",
            experience: [],
            educations: [],
            volunteer: [],
            technical_skills: [],
            media: []
        });
    });
    return userModel;
});
