define([
    'jquery',
    'underscore',
    'backbone'
    // TODO: Add views and template
], function($, _, Backbone) {
    var AppView = Backbone.View.extend({
        el: '#blogApp'
    });

    return AppView;
});
