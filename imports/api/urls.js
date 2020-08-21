import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const urlDetails = new Mongo.Collection('urlDetails');


Meteor.methods({
	'urlDetails.insert'(shortUrl,longUrl){
		urlDetails.insert({
			shortUrl:shortUrl,
			longUrl:longUrl
		});
	},

});