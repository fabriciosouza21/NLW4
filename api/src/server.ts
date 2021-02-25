import express, { request, response } from 'express';

const app = express();
app.get("/", (request, response) => {
    return response.json({ mensagem: "Hello world" });
});
app.post("/", (request, response) => {
    return response.json({ mensagem: "os dados foram salvos com sucesso!" });
});
app.listen(3333, () => console.log("server  is running!"));
