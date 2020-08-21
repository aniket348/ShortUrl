import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../ui/urlShortner.html';

FlowRouter.route('/getShortUrl',{
	name:'getShortUrl',
	action(){
		BlazeLayout.render('getLongUrl');

	}
});
FlowRouter.route('/',{
	name:'getShortUrl',
	action(){
		BlazeLayout.render('getLongUrl');
		
	}
});
FlowRouter.route('/short',{
	name:'short',
	action(){
		BlazeLayout.render('openUrl');
		
	}
});