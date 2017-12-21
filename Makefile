build:
	./node_modules/.bin/pug views/index.pug -o .

dev:
	python -m SimpleHTTPServer 8000 &
	./node_modules/.bin/pug -w views/index.pug -o .
