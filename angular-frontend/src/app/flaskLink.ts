export class flaskLink {
    //public static _API='https://5000-liveras-medicareliverav-9g3d975p0so.ws-eu46.gitpod.io/';

    public static getUrl() : string {
        var str = new String(process.env.NG_APP_URL) 
        var splits1 = str.substring(0, 8)
        var splits2 = str.substring(8,)
        var str3 = splits1+5000+"-"+splits2
        console.log(str3)
        return str3;
    }
}