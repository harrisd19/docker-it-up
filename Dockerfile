# Container image that runs your code
# FROM alpine:3.10
FROM node:16

WORKDIR /usr/src/app
#ENV NODE_ENV production

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY package.json .
COPY index.js .

RUN npm i -g @vercel/ncc

RUN npm install

# Code file to execute when the docker container starts up
# Is there going to be an issue with using workflow assets from outside the container? Can I somehow copy them into the container at run-time? This may be where we need to mount a volume.
ENTRYPOINT ["node", "/usr/src/app/dist/index.js"]

