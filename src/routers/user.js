import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Lai la dat day')
})

export default router;