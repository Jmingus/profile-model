var user = new UserModel({_id: '5601b04221a2660300000018'});
var App = Backbone.Router.extend({
	routes: {
		'home': 'homePage',
		'': 'homePage',
		'edit': 'editForms'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	editForms: function() {
		$('.page').hide();
		$('#edit').show();
		$('#name').val(user.get('name'));
		$('#inputEmail3').val(user.get('email'));
		$('#role').val(user.get('role'));
	},
	homePage: function(){
		$('.page').hide()
		$('#profile').show()
	}
});

var app = new App();
Backbone.history.start();

$('.form-horizontal').submit(function(e){
	e.preventDefault;
	user.save({
		name: $('#name').val(),
		email: $('#inputEmail3').val(),
		role: $('#role').val(),
		password: $('#inputPassword3').val()
	})
});

user.on('change', function(){
		$('.username').html(user.get('name'));
		$('.dropdown-toggle.username').html(user.get('name')+'<span class="caret"></span>')
		$('.profile-usertitle-job').text(user.get('role'));
		$('#name').val(user.get('name'));
		$('#inputEmail3').val(user.get('email'));
		$('#role').val(user.get('role'));
})

window.onload = function(){
	user.fetch();
}
