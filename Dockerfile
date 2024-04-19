FROM node
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 80
CMD PORT=80 npm start