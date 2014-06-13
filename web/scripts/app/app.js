App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('todo', { path: '/todo' });
  this.route('chart', { path: '/chart'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      {
      value: 825111,
      label: 'San Francisco'
      },
      {
      value: 984299,
      label: 'San Jose'
      },
      {
      value: 400740,
      label: 'Oakland'
      }
    ];
  }
});

App.IndexController = Ember.ObjectController.extend({
	actions: {
		newItemAdded: function(item) {
			this.get('model').pushObject(item);
		},

		itemDeleted: function(removedItem) {
			this.get('model').removeObject(removedItem);
		}
	}
});