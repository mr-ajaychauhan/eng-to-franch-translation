import express from 'express';
import cors from 'cors';
import { translateController } from './controllers/translate.js';


const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3133;

// Endpoint for translation
app.post('/translate', translateController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
