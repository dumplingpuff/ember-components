import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames:['listr-list__listr-list-item'],
  done: false,
  classNameBindings:['done:listr-list__listr-list-item--done'],

  click() {
      this.toggleProperty('done');
    }
});
