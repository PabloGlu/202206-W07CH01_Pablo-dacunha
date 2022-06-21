
import http from 'http';
import url from 'url';
import { validate } from './setup';

const PORT = process.env.PORT || 3204;



export const server = http.createServer(async (req, res) => {
    const path = url.parse(req.url as string).path;
    let dataFile= validate(path as string);

    if (dataFile) {
        const template = `<h1>Resultados:</h1>
<p>${dataFile[0]} + ${dataFile[1]} = ${dataFile[0] + dataFile[1]}</p>
<p>${dataFile[0]} - ${dataFile[1]} = ${dataFile[0] - dataFile[1]}</p>
<p>${dataFile[0]} * ${dataFile[1]} = ${dataFile[0] * dataFile[1]}</p>
<p>${dataFile[0]} / ${dataFile[1]} = ${dataFile[0] / dataFile[1]}</p>`;
        res.end(template);
    } else {
        res.end('Por favor, introduce dos numeros para la calculadora');
    }

    /*     const path = url.parse(req.url as string).path;
    let dataFile: string = `./data/${path}.txt`;
    fs.readFile(dataFile, { encoding: 'utf-8' })
        .then((data) => {
            console.log(data);
            const template = `<h1>Hola Mundo</h1><p>${data}</p>`;
            res.end(template);
        })
        .catch((err: Error) => {
            res.end('Error de lectura');
            console.error(err.message);
        }); */

    /* fs.readFile(dataFile, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            res.end('Error de lectura');
            console.log(err.message);
            return;
        }
        console.log(data);
        const template = `<h1>Hola Mundo</h1><p>${data}</p>`;
        res.end(template);
    }); */
});
server.listen(PORT);
