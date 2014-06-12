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