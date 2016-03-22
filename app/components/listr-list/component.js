import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'ul',
  classNames:['listr-list'],
  hidden: false,
  classNameBindings:['hidden:listr-list--hidden'],

  actions: {
    toggleHidden() {
      this.toggleProperty('hidden');
    }
  },
});
