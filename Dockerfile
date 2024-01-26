FROM node:20-alpine
WORKDIR /app
COPY package.* ./
RUN npm install

COPY . .

EXPOSE 3000
ENV NEXT_PUBLIC_GITHUB_TOKEN=ghp_5RVeIUNZmxxxxxxxxxxxxxxxxx

CMD npm run dev

