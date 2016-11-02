import Ember from 'ember';

export default Ember.Controller.extend({

	appName: 'FoodMe',

	menuLinks: [{
		name: 'Restaurants',
		url: 'restaurants'
	}, {
		name: 'About',
		url: 'about'
	}]

});
