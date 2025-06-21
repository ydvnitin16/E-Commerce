import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors("http://localhost:8765"));


app.get('/', (req, res) => {
    res.send('Running.');
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
});
