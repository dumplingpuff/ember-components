import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { title: 'Favorite Things',
        items: [
           {content:'sleep'},
           {content:'eat'},
           {content:'exercise'},
           {content:'run'}
         ],
     },
      { title: 'ToDos',
      items: [
        {content:'sit'},
        {content:'stand'},
        ]
      },
    ];
  }
});
