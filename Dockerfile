FROM node:10.17.0-buster-slim

LABEL maintainer="Penn Labs"

WORKDIR /app/

# Copy project dependencies
COPY package*.json /app/

# Install project dependencies
RUN npm install --production=true

# Copy project files
COPY . /app/

# Build app
RUN npm run build

CMD ["npm", "start"]
