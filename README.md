git add . && git commit -m "c" && git push

docker build -t larux/novostroy-25-nn:170525 . && docker push larux/novostroy-25-nn:170525

---

# Build stage

FROM --platform=linux/amd64 node:20-alpine AS builder

WORKDIR /app

# Copy package files

COPY package\*.json ./

# Install dependencies

RUN npm ci

# Copy source files

COPY . .

# Build the application

RUN npm run build

# Production stage

FROM --platform=linux/amd64 node:20-alpine

WORKDIR /app

# Copy built assets from builder

COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .
COPY --from=builder /app/node_modules node_modules/

# Expose the port the app runs on

EXPOSE 9999

# Start the application

CMD ["node", "build"]
