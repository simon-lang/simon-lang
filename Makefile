build:
	./node_modules/.bin/pug views/index.pug -o .

dev:
	python -m SimpleHTTPServer 8000
