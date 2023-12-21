import express from 'express'
import { MongoClient } from 'mongodb'

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/', async (req, res) => {
  const result = await collection.find({}).toArray()
  res.json(result)
})

app.listen(8080, HOST, () => {
  console.log(`Listening on port ${PORT}`)
})

// const URL = 'mongodb://devUser:secret@mongo/mongo-db?authSource=admin'
const URL = 'mongodb://devUser:secret@mongo/mongo-db'
const client = new MongoClient(URL)

try {
  await client.connect()
  console.log('Succesfully connected to mongo')
} catch (e) {
  console.error(e)
}
const db = client.db()

// Prepare initial data
const doc1 = { name: 'Murata', age: 32 }
const doc2 = { name: 'Keisuke', age: 32 }

const collection = db.collection('test-collection')
await collection.insertMany([doc1, doc2])