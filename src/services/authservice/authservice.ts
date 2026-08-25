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
    refreshToken :"";
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

    refreshToken(): Observable<RefreshTokenResponse> {
        // If your backend relies on HttpOnly cookies, send `withCredentials: true`
        // If it relies on a payload request, retrieve it: const refreshToken = localStorage.getItem('refresh_token');
    
        return this.http.post<RefreshTokenResponse>(`${APIUrl}/refresh`, {}, { withCredentials: true }).pipe(
            tap((response) => {
                this.updateAccessToken(response.refreshToken);

                if (response.refreshToken) {
                    localStorage.setItem('refresh_token', response.refreshToken);
                }
            }),
            catchError((error) => {
                this.logout();
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
