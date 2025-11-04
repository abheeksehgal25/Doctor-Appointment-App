# Backend Dockerfile
FROM node:18-slim
WORKDIR /app

# install dependencies first (package.json + package-lock.json if present)
COPY package*.json ./
RUN npm ci --only=production || npm install --only=production

# copy rest of the source
COPY . .

ENV PORT=4000
EXPOSE 4000

CMD ["node", "server.js"]
