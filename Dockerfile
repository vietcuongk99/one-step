FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

ENV NODE_ENV production
CMD chown -R node:node /app/.next

EXPOSE 3000

USER node

CMD ["npm", "start"]