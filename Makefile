build_image:
	docker build -t nextjs_type_mui .

create_container:
	docker run -d -p 80:3000 --name $(name) nextjs_type_mui