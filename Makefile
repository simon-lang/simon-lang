build:
	./node_modules/.bin/pug views/index.pug
	cp views/index.html views.html

dev:
	./node_modules/.bin/pug -w views/index.pug -o views.html
