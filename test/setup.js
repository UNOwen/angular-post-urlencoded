'use strict';

angular.module('main', [
	'http-post-urlencoded'
])
.config(function interceptPOSTRequests($httpProvider) {
	$httpProvider.interceptors.push('postUrlencodeInterceptor');
});
