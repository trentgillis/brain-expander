# Specify a base image
FROM node:alpine

# Specify a working directory in the docker image
WORKDIR /usr/app

# Copy package.json into the image
COPY ./package.json ./

# Intall node dependencies
RUN npm install

# Copy all of the build files into into the image
COPY ./ ./

# Specify a default command for the container
CMD ["npm", "start"]