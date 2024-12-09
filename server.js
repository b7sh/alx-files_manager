import express from 'express';
import routs from './routes/index'

const app = express();

routs(app)

app.listen((port=5000, host='0.0.0.0') => {
  console.log(`Server running on port ${port}`)
})
