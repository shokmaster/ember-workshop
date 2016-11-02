import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return Ember.$.getJSON('https://raw.githubusercontent.com/IgorMinar/foodme/master/server/data/restaurants.json');
    }
});
