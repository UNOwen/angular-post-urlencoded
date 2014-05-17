# Angular POST interceptor

Encodes POST requests to application/x-www-form-urlencoded format.
Behaves like jQuery.param (in fact, is based on v2.1.1 of jQuery), but does not
conflict with angular resources, and does not require additional dependencies.