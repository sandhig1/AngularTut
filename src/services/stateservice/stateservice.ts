import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

import { APIUrl } from '../../constants/global.constant';

@Service()
export class Stateservice {
    http = inject(HttpClient)

    getStates(){
        return this.http.get("http://angulartutapi.esoltechserv.com/api/state/getStates");
    }
}
