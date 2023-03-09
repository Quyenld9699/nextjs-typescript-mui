FROM node:18-alpine

RUN apk add --no-cache yarn

WORKDIR /work 

# * Sao chép tất cả các file trong thư mục gốc của dự án vào thư mục làm việc
COPY . .

RUN yarn install

RUN yarn build

# Khai báo port sử dụng
EXPOSE 3000

CMD [ "yarn", "start" ]