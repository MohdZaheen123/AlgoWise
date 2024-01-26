FROM node:20-alpine
WORKDIR /app
COPY package.* ./
RUN npm install

COPY . .

EXPOSE 3000
ENV NEXT_PUBLIC_GITHUB_TOKEN=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

CMD npm run dev

