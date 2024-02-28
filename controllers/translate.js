import { translate } from '@vitalets/google-translate-api';

export const translateController = async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text parameter is required' });
    }
    try {
        const { text: translation } = await translate(text, { from: 'en', to: 'fr' }); // Translate to French
        res.json({ translation });
    } catch (error) {
        let statusCode = 500;
        let errorMessage = error.message;

        if (error.message === 'Bad request') {
            statusCode = 400;
            errorMessage = 'Bad Request';
        } else if (error.message === 'Translation error') {
            statusCode = 422; // Unprocessable Entity
            errorMessage = 'Translation Error';
        }
        res.status(statusCode).json({ error: errorMessage });
    }
}