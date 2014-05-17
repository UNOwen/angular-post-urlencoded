'use strict';

angular.module('main', [
	'postInterceptor'
])
.config(function interceptPOSTRequests($httpProvider) {
	$httpProvider.interceptors.push('postInterceptor');
});
