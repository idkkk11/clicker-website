import express from "express";
const app = express();
import Datastore from "nedb";


app.listen(8888, () => console.log("Listening at 8888"));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore("database.db");
database.loadDatabase();

app.get('/api', (request, response) => {
    database.find({}).sort({"Money": -1}).limit(5).exec(function (err, data) {
        if (err) {
            response.end();
            return;
        }
    response.json(data);
    });
});

app.post('/api', (request, response) => {
    // console.log(request.body);
    // const data = request.body;
    // database.insert(data);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
});


