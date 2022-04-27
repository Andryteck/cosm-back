FROM node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN yarn
ADD . .
RUN yarn run build
CMD ["node", "./dist/main.js"]
