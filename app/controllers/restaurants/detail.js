import Ember from 'ember';

export default Ember.Controller.extend({

	img: Ember.computed('model.id', function(){
		return `https://github.com/IgorMinar/foodme/blob/master/app/img/restaurants/${this.get('model.id')}.jpg?raw=true`
	})
});
