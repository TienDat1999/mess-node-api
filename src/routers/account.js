import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Accoun cua dat aday')
})

export default router;