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
            "time": d3.time.format('%Y-%m-%d').parse("2013-05-01"),
            "value": 40
        },
        {
            "time": d3.time.format('%Y-%m-%d').parse("2013-05-02"),
            "value": 80
        },
        {
            "time": d3.time.format('%Y-%m-%d').parse("2013-05-03"),
            "value": 120
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