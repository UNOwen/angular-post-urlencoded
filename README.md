# Angular POST interceptor

Encodes POST requests to application/x-www-form-urlencoded format.

Behaves like jQuery.param (in fact, is based on v2.1.1 of jQuery), but does not
conflict with angular resources, and does not require additional dependencies.

## Getting started

1. Link script

```html
<script src="bower_components/angular-post-interceptor/src/postinterceptor.js"></script>
```

2. Configure Angular to use interceptor

```js
angular.module('main', ['postInterceptor'])
.config(function interceptPOSTRequests($httpProvider) { // Proper post request data encoding
	$httpProvider.interceptors.push('postInterceptor');
})
```
