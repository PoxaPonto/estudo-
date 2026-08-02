// import { createServer} from "node:htpp";

// const server = createServer((request, response) => {
//   response.writeHeadnpm(200, { "Content-Type": "text/plain" });
//   response.end("Hello, World!");
// });

// server.listen(3000)

import { fastify } from "fastify";

const serve = fastfy()

server.post("/viudeos", () => {
  return `Hello Word`
})

server.get("/videos", () => {
  return `Hello Poxa`
})

server.put("/videos", () => {
  return `Hello Poxa`
})

server.listen({ 
    port: 3000,
})