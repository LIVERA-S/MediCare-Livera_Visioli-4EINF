import { HttpClient } from "@angular/common/http";

export class flaskLink {
    public static _API='https://5000-liveras-medicareliverav-rchf9ids86i.ws-eu46.gitpod.io/';
    menuitem.menuitem[]=undefined!;
    constructor(private http: HttpClient, private router:Router){
        var str= new String(process.env.NG_APP_URL)
        var splits1 = str.substring(0,8)
        var splits2 = str.substring(8,)
        var str3 = splits1+5000"-"+splits2
        console.log(str3)
        this.http.get<menuitem[]>(str3).subscribe(data=>{
            this.menuitem=data;
            console.log("menuitem",this.menuitem)
        })
    }
}