import { GlobalPositionStrategy } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { APIUrl } from '../constants/global.constant';

@Service()
export class Enquiryserv {

    http = inject(HttpClient);

    getEnquiries(){
        return this.http.get(APIUrl + "Enquiry/getEnquiries");
    }

}
