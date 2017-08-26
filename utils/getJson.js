const http = require('http');

function getJson(url){

    return new Promise((resolve, reject)=>{
        http.get(url, (response) => {
            const { statusCode } = response;
            const contentType = response.headers['content-type'];
          
            let error;
            if (statusCode !== 200) {
                error = new Error('Request Failed.\n' +
                                `Status Code: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' +
                                `Expected application/json but received ${contentType}`);
            }
            if (error) {
                // consume response data to free up memory
                response.resume();
                reject(error);
            }else{
                response.setEncoding('utf8');
                let rawData = '';
                response.on('data', (chunk) => { rawData += chunk; });
                response.on('end', () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        resolve(parsedData);
                    } catch (e) {
                        reject(e);
                    }
                });   
            }
          }).on('error', (e) => {
            reject(e);
          });
    })
}

module.exports = getJson;