var UserModel = Backbone.Model.extend({
	defaults: {
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	},
  urlRoot: 'http://tiyfe.herokuapp.com/collections/jmingus-day18.4',
  idAttribute: '_id'
});
