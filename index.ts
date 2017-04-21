import {PageLoader} from './page_loader';
import {Cheerio} from 'cheerio';
import * as http from 'http';

let callback: (res: http.ClientResponse) => void = function(res: http.ClientResponse) {
    console.info('Rendering Response')
    let rawData = '';
    res.on('data', (chunk) => {rawData += chunk;});
    res.on('end', () => {
        console.log(rawData);
    });
}

console.info('Starting')

PageLoader.loadURL('http://n7hq.masseffect.com/home/inventory/?name=deadskip&platform=pc#', callback);

