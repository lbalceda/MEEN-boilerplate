this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["components/new-todo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"new-todo-panel\">\n	");
  hashContexts = {'valueBinding': depth0,'class': depth0};
  hashTypes = {'valueBinding': "STRING",'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.TextField", {hash:{
    'valueBinding': ("title"),
    'class': ("item-text")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	<button class=\"add-button\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createTodo", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Add</button>\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["components/todo-list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n	<li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("todoItem.isComplete:completed")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n		<a href=\"#\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleCompleted", "todoItem", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "todoItem.text", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</a>\n		");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "todoItem.isComplete", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n	</li>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n		<button class=\"delete-link\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteItem", "todoItem", {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Delete?</button>\n		");
  return buffer;
  }

  data.buffer.push("<ul class=\"todo-list\">\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "todoItem", "in", "todoItems", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("mongo todo test");
  }

  data.buffer.push("<div class=\"container\">\n	<div class=\"info-panel\">\n    <p>\n        <strong>");
  hashContexts = {'id': depth0};
  hashTypes = {'id': "STRING"};
  options = {hash:{
    'id': ("todo-link")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "todo", options) : helperMissing.call(depth0, "link-to", "todo", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</strong>\n    </p>\n	</div>\n</div>");
  return buffer;
  
});
this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["todo"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h2 class=\"title\">Todo list</h2>\n\n<div class=\"container\">\n	<div class=\"info-panel\">\n		<p>Add todos here</p>\n	</div>\n\n	");
  hashContexts = {'onCreate': depth0};
  hashTypes = {'onCreate': "STRING"};
  options = {hash:{
    'onCreate': ("newTodoAdded")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['new-todo'] || depth0['new-todo']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "new-todo", options))));
  data.buffer.push("\n\n	");
  hashContexts = {'todoItems': depth0,'onDelete': depth0};
  hashTypes = {'todoItems': "ID",'onDelete': "STRING"};
  options = {hash:{
    'todoItems': ("model"),
    'onDelete': ("todoItemDeleted")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['todo-list'] || depth0['todo-list']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "todo-list", options))));
  data.buffer.push("\n</div>\n\n");
  return buffer;
  
});
App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('todo', { path: '/todo' });
});

App.IndexRoute = Ember.Route.extend({
	model: function() {
		// var url = '/api/todo';
		// return Ember.$.getJSON(url).then(function(data) {
		// 	return Ember.A(data.items);
		// });
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
App.NewTodoComponent = Ember.Component.extend({
	title: '',
	actions: {
		createTodo: function() {
			console.log('Creating new todo...');

			var url='/api/todo/new';
			var that = this;
			var newItemData = {text: this.get('title')};
			
			Ember.$.post(url, newItemData).then(function(data) {
				var newTodo = App.TodoModel.create({
					text: that.get('title')
				});
				console.log('Invoking onCreate action...');
				that.sendAction('onCreate', newTodo);
				that.set('title', '');
			});			
		}
	}
});
App.TodoListComponent = Ember.Component.extend({
	actions: {
		deleteItem: function(item) {
			console.log('deleteItem');

			var url='/api/todo/delete';
			var data = {id: item.get('itemID')};
			var that = this;
			Ember.$.post(url, data).then(function() {
				that.sendAction('onDelete', item);
			});
		},
		toggleCompleted: function(item) {
			console.log('toggleCompleted');
			item.toggleCompleted();

			var url='/api/todo/status';
			var data = {id: item.get('itemID'), isComplete: item.get('isComplete')};
			Ember.$.post(url, data);
		}
	}
});
// OBJECT MODEL

App.TodoModel = Ember.Object.extend({
	text: '',
	isComplete: false,
	toggleCompleted: function() {
		this.set('isComplete', !this.get('isComplete'));
	}
});

// CONTROLLER / ROUTE

App.TodoRoute = Ember.Route.extend({
  model: function() {
    var url = '/api/todo';
	return Ember.$.getJSON(url).then(function(data) {
		return data.items.map(function(todoItem) {
			return App.TodoModel.create(todoItem);
		});
	});
  }
});

App.TodoController = Ember.Controller.extend({
  actions: {
  		newTodoAdded: function(todoItem) {
  			console.log('newTodoAdded action triggered');
  			this.get('model').pushObject(todoItem);
  		},
  		todoItemDeleted: function(todoItem) {
  			this.get('model').removeObject(todoItem);
  		}
  }
});