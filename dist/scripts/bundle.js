(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var user = new UserModel({ _id: '5601b04221a2660300000018' });
var App = Backbone.Router.extend({
	routes: {
		'home': 'homePage',
		'': 'homePage',
		'edit': 'editForms'
	},
	profile: function profile() {
		$('.page').hide();
		$('#profile').show();
	},
	editForms: function editForms() {
		$('.page').hide();
		$('#edit').show();
		$('#name').val(user.get('name'));
		$('#inputEmail3').val(user.get('email'));
		$('#role').val(user.get('role'));
	},
	homePage: function homePage() {
		$('.page').hide();
		$('#profile').show();
	}
});

var app = new App();
Backbone.history.start();

$('.form-horizontal').submit(function (e) {
	e.preventDefault;
	user.save({
		name: $('#name').val(),
		email: $('#inputEmail3').val(),
		role: $('#role').val(),
		password: $('#inputPassword3').val()
	});
});

user.on('change', function () {
	$('.username').html(user.get('name'));
	$('.dropdown-toggle.username').html(user.get('name') + '<span class="caret"></span>');
	$('.profile-usertitle-job').text(user.get('role'));
	$('#name').val(user.get('name'));
	$('#inputEmail3').val(user.get('email'));
	$('#role').val(user.get('role'));
});

window.onload = function () {
	user.fetch();
};

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map