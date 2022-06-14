require('dotenv/config')
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
const { serverRoutes } = require('./server/routes/api/v1/index')

// Middlewares 
app.use(express.json());
app.use(cors());

// Server Routes 
serverRoutes(app);

// For Production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
// }).then(() => { console.log('MongoDB Connected') })

app.listen(port, () => console.log(`Server Running on PORT ${port}`))