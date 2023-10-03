import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();

const router = express.Router();
const client = new MongoClient(process.env.DDBB);
const db = client.db('practica');
const Categoria = db.collection('categoria');

router.get('/getAll', async (req, res) => {
    try {
        await client.connect();
        const info = await Categoria.find().toArray();
        res.json(info);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } finally {
        client.close();
    }
});

router.get('/getOne/:id', async (req, res) => {
    try {
        await client.connect();
        const id = req.params.id;
        const info = await Categoria.find({ _id: new ObjectId(id) }).toArray();
        res.json(info);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } finally {
        client.close();
    }
});



router.post('/insert', async (req, res) => {
    try {
        await client.connect();
        const data = req.body;
        const response = await Categoria.insertOne(data);
        res.json({
            response,
            data
        });
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        await client.connect();
        const id = req.params.id;
        const response = await Categoria.deleteOne({ _id: new ObjectId(id) });
        res.json(response);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } finally {
        client.close();
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        await client.connect();
        const data = req.body;
        const id = req.params.id;
        await Categoria.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    } finally {
        client.close();
    }
});

export default router;