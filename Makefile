build:
	./node_modules/.bin/pug views/index.pug -o .

dev:
	./node_modules/.bin/http-server ./ -p 1337 --cors &
	open http://localhost:1337
	./node_modules/.bin/pug -w views/index.pug -o .
