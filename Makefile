mongo:
	docker run --name some-mongo -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -p 27017:27017 -d mongo

init-prisma:
	npx prisma init

gen-prisma:
	npx prisma generate

