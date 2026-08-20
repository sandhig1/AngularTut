import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';

import { APIUrl } from '../../constants/global.constant';
import { Observable, tap } from 'rxjs';

interface loginRequest {
    UserName : "",
    Password : "",
    UserType : ""
}

interface LoginResponse{
    status : false,
    msg : "",
    token: ""
}

@Injectable({
    providedIn:'root'
})

export class Authservice {

    private access_token:string="access_token";

    http = inject(HttpClient);

    credentialData = { UserName: "", Password: "", UserType:"" };
    
    login(credential : {UserName: String; Password: String; UserType: String}): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${APIUrl}/login/login`, credential).pipe(
            tap((res) => {
                if (res.status){
                    this.saveToken(res.token);
                }
            })
        );
    }

    private saveToken(accessToken: string): void {
        localStorage.setItem(this.access_token, accessToken);
    }

}
