build_image:
	docker build -t nextjs_type_mui .

create_container:
	docker run -d -p $(port):3000 --name $(name) nextjs_type_mui