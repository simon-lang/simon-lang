build:
	./node_modules/.bin/pug views/index.pug
	cp views/index.html views.html

dev:
	python -m SimpleHTTPServer 8000
