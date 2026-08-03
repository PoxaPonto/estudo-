// import { createServer} from "node:htpp";

// const server = createServer((request, response) => {
//   response.writeHeadnpm(200, { "Content-Type": "text/plain" });
//   response.end("Hello, World!");
// });

// server.listen(3000)

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";
const serve = fastfy()

server.post("/viudeos", (request, reply) => {
    



  database.create({
  title: "Jackson",
  description: "ele gosta",
  duration: 1000,
 
  })
  
  console.log(datababse.list())
  
   return reply.status(201).send()

})




server.get("/videos", () => {
  return `Hello Poxa`
})

server.put("/videos", () => {
  return `Hello Poxa`
})

server.delete("/videos", () => {
  return `Hello Poxa`
})

server.listen({
     port: 3333,
})