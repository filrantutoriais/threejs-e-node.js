import express from "express";
import * as path from "path";
import url from "url";

const __filename =  url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname + '/public'));

app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));

app.listen(3000, ()=>{ console.log(`Connected`) });