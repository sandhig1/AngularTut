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

interface RefreshTokenResponse{
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
        debugger;
        localStorage.setItem("UserName", "");
        localStorage.setItem("UserRole", "");
        localStorage.setItem(this.access_token, "");

        return this.http.post<LoginResponse>(`${APIUrl}/login/login`, credential).pipe(
            tap((res) => {
                if (res.status){
                    localStorage.setItem("UserName", credential.UserName.toString());
                    localStorage.setItem("UserRole", credential.UserType.toString());
                    
                    this.saveToken(res.token);
                }
            })
        );
    }

    private saveToken(accessToken: string): void {
        localStorage.setItem(this.access_token, accessToken);
    }

    refreshToken(credential : {UserName: String; UserType: String}): Observable<RefreshTokenResponse> {
        // If your backend relies on HttpOnly cookies, send `withCredentials: true`
        // If it relies on a payload request, retrieve it: const refreshToken = localStorage.getItem('refresh_token');
        //alert("RefreshToken function of authservice callled");
        return this.http.post<RefreshTokenResponse>(`${APIUrl}/Auth/RefreshToken`, credential).pipe(
            tap((response) => {
                //alert('new generated token : ' + response.token);
                this.updateAccessToken(response.token);

                if (response.token) {
                    localStorage.setItem('refresh_token', response.token);
                }  
                
                return response;
            })
        );
    }

    updateAccessToken(token: string): void {
        localStorage.setItem('access_token', token);
        //this.accessToken$.next(token);
    }

    logout(): void {
        localStorage.removeItem('access_token');
        //localStorage.removeItem('refresh_token');
    }

}
