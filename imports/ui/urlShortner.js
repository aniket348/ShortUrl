import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import {urlDetails} from '../api/urls.js';
import './urlShortner.html';

Template.openUrl.helpers({
	getlong(){
		var short = FlowRouter.getQueryParam("data")[0];
		var data;
			var p = new Promise(function(resolve,reject){
				data = urlDetails.find({shortUrl:short}).fetch();
				resolve(data);
			});
			//window.replace(data[0].longUrl);
			console.log(data[0].longUrl);
			return data[0].longUrl;

	},
});

Template.getLongUrl.helpers({
	
});
Template.getLongUrl.events({
	'submit #inputForm':function(event,template){
		event.preventDefault();
		var longUrl = event.target.longUrl.value;
		Meteor.call('getShortUrl',{"longUrl":longUrl}, (err,res) => {
			if(err){
				alert("err happend" + err);
			}
			else{
				var data;
				var p = new Promise(function(resolve,reject){
					data = urlDetails.find({longUrl:longUrl}).fetch();
					resolve(data);
				});
				console.log(data);
				if(data.length == 0){
					Meteor.call('urlDetails.insert',res,longUrl);
					var su = document.getElementById('shortUrl');
					su.innerHTML = res;
					//su.href = longUrl;
				}
				else{
					var su = document.getElementById('shortUrl');
					su.innerHTML = data[0].shortUrl;
					//su.href = data[0].longUrl;
				}
				
				//console.log(su);
			}
		});


	},
	'click #shortUrl':function(event,template){
		var su = document.getElementById('shortUrl');
		FlowRouter.go('/short',{},{data:[su.innerHTML]});
	},
});