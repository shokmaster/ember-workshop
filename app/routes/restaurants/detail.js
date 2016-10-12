import Ember from 'ember';

export default Ember.Route.extend({

	queryParams: {
		id: {
			refreshModel: true
		}
	},

	 model(params){
	 	const restaurants = this.modelFor('restaurants');
	 	return restaurants.findBy('id', params.id);
	 }
});
