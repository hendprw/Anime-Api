const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var creatorList = ['Hendrik'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'Apikey Invalid!! Chat Owner'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey Invalid:( Hub Owner Bro'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

let nama = [
     {
     	id: 1,
         nama: 'Hendrik',
         askot: 'Madura',
         status: 'hidup'
         }
        ];
         

app.get('/', (request, response) => response.send('Hello World'));

 app.get('/nama', (request, response) => {
    return response.json(nama);
});

app.get('/funfact', async (req, res, next) => {
       fetch(encodeURI(`https://raw.githubusercontent.com/MikuWhatsBOT/Test/main/ff.json`))
        .then(response => response.json())
        .then(data => {
        	nimek =  data[Math.floor(Math.random() * data.length)];
        var result = nimek;
             res.json({
             	creator: `${creator}`,
                 result,
                 status : 200
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})



// mendengarkan event yang terjadi pada localhost dengan port 3000
//app.listen(3000, () => console.log('listenig on localhos:3000'));
