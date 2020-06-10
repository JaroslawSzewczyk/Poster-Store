const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');

const posters = require('./routers/posters.routers');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/client')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'))
// });

app.use('/', posters);

app.use((req, res) => {
  res.status(404).json({ message: '404 not found...' });
});

const dbURI = process.env.NODE_ENV === 'production' ? `mongodb+srv://${process.env.GIT_USERNAME}:${process.env.TESTPS}@cluster0-kvble.azure.mongodb.net/${process.env.TEST_NAME}?retryWrites=true&w=majority` : 'mongodb://localhost:27017/PosterStoreDB';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});