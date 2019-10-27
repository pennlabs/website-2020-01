FROM node:13.0.1-stretch-slim

WORKDIR /app/

# Copy project dependencies
COPY package*.json /app/

# Install project dependencies
RUN npm ci

# Copy project files
COPY . /app/
RUN npm run build

CMD ["npm", "start"]
