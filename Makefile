build:
	./node_modules/.bin/pug views
	cat views/*.html > views.html
	rm views/*.html

dev:
	./node_modules/.bin/pug -w views
