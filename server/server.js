const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const _ = require('lodash');

const Entry = require('./Models/Entry');

// File Storage Configuration
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const fs = require('fs');
const { DateTime } = require('luxon');
const mime = require('mime-types')

var https = require('https');

const API_PORT = process.env.PORT || 8544;
const HTTPS_PORT = 443;

const app = express();
const router = express.Router();

// this is our MongoDB database
const dbRoute = 'mongodb+srv://nilutpol:SW9rZNFauJzUnZbK@cluster0.uj0hq.mongodb.net/assam_police_day';

// connects our back end code with the database
mongoose.connect(dbRoute, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

let db = mongoose.connection;
let gfs;
let upload;

Grid.mongo = mongoose.mongo;
db.once('open', () => {
    console.log('connected to the database.');
    // Setting up the storage element
    gfs = Grid(db.db);

    let storage = GridFsStorage({
        db: db.db,
        file: (req, file) => {
            return { filename: file.originalname, metadata: JSON.parse(req.body.filepond) };
        }
    });

    // Multer configuration for single file uploads
    upload = multer({
        storage: storage
    }).single('filepond');
});

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));

router.post('/add_entry', (req, res) => {
    if (req.body) {
        let entry = new Entry(req.body);
        entry.save()
            .then(data => {
                return res.json({
                    success: true,
                    data: 'Your entry is submitted successfully.'
                });
            });
    } else {
        return res.json({
            success: false,
            data: 'Unable to submit entry. Please try after sometime.'
        });
    }
});

router.post('/upload_document', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.json({ success: false, data: err });
            return;
        }
        res.json({ success: true, data: true });
    });
});

// append /api for our http requests
app.use('/api', router);

app.get('/*', function (req, res) {
    // Catch all path except /
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
