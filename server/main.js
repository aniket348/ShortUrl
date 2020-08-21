import { Meteor } from 'meteor/meteor';

import '../imports/api/urls.js';
import {urlDetails} from '../imports/api/urls.js';

Meteor.startup(() => {
  // code to run on server at startup



});

Meteor.methods({
	getShortUrl(data){
		var longUrl = data.longUrl;
		var shortUrl = "";
		var totalUrl = urlDetails.find({}).fetch();
		//console.log(totalUrl);
		shortUrl = "OHShort-"+(totalUrl.length+1);
		return shortUrl;
	},
});