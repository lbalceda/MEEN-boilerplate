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
        value: 64,
        label: 'San Francisco'
      },
      {
        value: 93,
        label: 'Phoenix'
      },
      {
        value: 66,
        label: 'Miami'
      },
      {
        value: 103,
        label: 'New York'
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