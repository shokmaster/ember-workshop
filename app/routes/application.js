import Ember from 'ember';

export default Ember.Route.extend({

    /**
     * i18n service injection
     *
     * @type Object
     */
    i18n: Ember.inject.service(),

    /**
     * Set the language
     *
     * @method afterModel
     */
    beforeModel: function() {
        this._super(...arguments);

        const language = navigator.language || navigator.userLanguage || 'es';

        this.set('i18n.locale', language);
    }

});
