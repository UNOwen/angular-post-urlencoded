'use strict';

describe('Service: postUrlencodeInterceptor', function () {

	beforeEach(module('main'));

	// instantiate service
	var $httpBackend, $http;
	beforeEach(inject(function (_$httpBackend_, _$http_) {
		$httpBackend = _$httpBackend_;
		$http = _$http_;
	}));
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	it('should encode data', function() {
		$httpBackend.expectPOST('/data/not-implemented.json', 'a=b&b=c+%26&c%5Bd%5D=e&c%5Bf%5D=g').respond(200, []);
		$http({
			url: '/data/not-implemented.json',
			method: 'post',
			data: {
				a: 'b',
				b: 'c &',
				c: {
					d: 'e',
					f: 'g'
				},
				fun: function() {return 'funval';}
			}
		});
		$httpBackend.flush();
	});

	it('should include proper header', function() {
		$httpBackend.expectPOST('/data/not-implemented.json', 'a=b', function(headers) {
			return headers['Content-Type'] && headers['Content-Type'].indexOf('application/x-www-form-urlencoded') === 0;
		}).respond(200, []);
		$http({
			url: '/data/not-implemented.json',
			method: 'post',
			data: {a:'b'}
		});
		$httpBackend.flush();
	});
});