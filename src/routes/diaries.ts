import express  from "express";


const router = express.Router()

.get('/', (_req,res) => {
    res.send('Fetching all entry diaries')
})

.post('/', (_req,res)=> {
    res.send('Saving a diary')
})

export default router;