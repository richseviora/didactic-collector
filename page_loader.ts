import * as http from 'http';

export class PageLoader {
    public static loadURL(url: string, callback: (res:http.ClientResponse) => void) {
         http.get(url, callback);
    }

}