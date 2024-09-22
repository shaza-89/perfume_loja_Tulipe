import express from "express";
import fs from "fs";  /* Modulo integrado de node, ele permite trabalhar com o file system ou pastas no sistema node (pasta do projeto.) */
import bodyParser from "body-parser";



const port = 5000;
const app = express();
app.use(bodyParser.json());


/* Leitura da data */
const readData = () => {
    try{
        const data = fs.readFileSync("./backend/data/Products.json");
        return JSON.parse(data);
    } catch (error){
        console.log(error)
    }
}

const writeData = (data) => {
    try{
        fs.writeFileSync("./backend/data/Products.json", JSON.stringify(data))
    } catch (error){
        console.log(error)
    }
}

/* Api productos */
/* todos os items - todos los items */
app.get("/", (req, res) => {
    const data = readData();
    res.json(data.list_items);
});

/* item individuais - Items individuales*/
app.get("/product/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const item = data.list_items.find((item) => item.id === id);
    res.json(item);
});

/* todos os items seção administrativa - todos los items seccion acministrativa */
app.get("/administrative-section", (req, res) => {
    const data = readData();
    res.json(data.list_items);
});

/* Cria item - Crear item */
app.post('/administrative-section',(req,res) =>{
    const data = readData();
    const body = req.body;
    const newItem = {
        id: data.list_items.length + 1, 
        ...body,
    };
    data.list_items.push(newItem);
    writeData(data);
});


/* Atualizar item - Actualizar un item */
app.put('/administrative-section/:id',(req, res)=>{
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const itemIndex = data.list_items.findIndex((itemIndex) => itemIndex.id === id);
    data.list_items[itemIndex] = {
        ...data.list_items[itemIndex],
        ...body,
    };
    writeData(data);
    res.json({message: "Item update successfully"})
})
/* verificar no esta actualizando */


/* deletando item - eliminando un item */
app.delete('/administrative-section/:id',(req, res)=>{
    const data = readData();
    const id = parseInt(req.params.id);
    const itemIndex = data.list_items.findIndex((item) => item.id === id);
    data.list_items.splice(itemIndex, 1);
    writeData(data);
    res.json({message: "Item delete successfully"});
})

/* Api ususario */
app.get("/login", (req, res) => {
    res.send("envio usuario");
});



app.listen(port , () => console.log(`server running on port ${port}`))
