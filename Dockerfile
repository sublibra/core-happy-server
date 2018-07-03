FROM node:8

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production
RUN npm install --only=production

# Bundle app source
COPY . .

# Download, build and install web-UI
RUN git clone https://github.com/JohanBjerning/happy-web.git
WORKDIR ./happy-web
RUN npm install 
RUN npm run build 
COPY ./dist ./dist

EXPOSE 8080
CMD [ "npm", "start" ]