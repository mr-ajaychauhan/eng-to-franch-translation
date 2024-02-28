import express from 'express';
import cors from 'cors';
import { translateController } from './controllers/translate.js';


const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3133;

app.get('/', (req, res) => {
    res.send('Welcome to the translation service');
});


// Endpoint for translation
app.post('/translate', translateController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
