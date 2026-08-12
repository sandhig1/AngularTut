import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Apphome } from './apphome/apphome';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';
import { Enquiry } from './enquiry/enquiry';
import { EnquiryList } from './enquiry-list/enquiry-list';
import { Variables } from './variables/variables';
import { Components } from './components/components';
import { Bindings } from './bindings/bindings';
import { Routing } from './routing/routing';
import { Directives } from './directives/directives';
import { ControlFlows } from './control-flows/control-flows';
import { TemplateForms } from './template-forms/template-forms';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { Signals } from './signals/signals';
import { Pipes } from './pipes/pipes';
import { CrudOps } from './crud-ops/crud-ops';
import { SignalForms } from './signal-forms/signal-forms';
import { Dashboard } from './dashboard/dashboard';
import { State } from './state/state';
import { StateList } from './state-list/state-list';
import { City } from './city/city';
import { CityList } from './city-list/city-list';
import { roleBasedGuard } from './role-based-guard';

export const routes: Routes = [
    {path:'', component:Apphome},
    {path:'login', component:Login},
    {path:'', component:Home, 
        children:[
            {path:'dashboard', component:Dashboard, canActivate :[roleBasedGuard]},
            {path:'variables', component:Variables},
            {path:'components', component:Components},
            {path:'bindings', component:Bindings},
            {path:'routing', component:Routing},
            {path:'directives', component:Directives},
            {path:'control-flows', component:ControlFlows},

            {path:'template-forms', component:TemplateForms},
            {path:'reactive-forms', component:ReactiveForms},
            {path:'signal-forms', component:SignalForms},
            
            {path:'signals', component:Signals},
            {path:'pipes', component:Pipes},
            {path:'crud-ops', component:CrudOps},

            {path:'enquiry', component:Enquiry, canActivate :[roleBasedGuard]},
            {path:'enquiry/:id', component:Enquiry},
            {path:'enquirylist', component:EnquiryList},

            {path:'state', component:State},
            {path:'state/:id', component:State},
            {path:'statelist', component:StateList},

            {path:'city', component:City},
            {path:'city/:id', component:City},
            {path:'citylist', component:CityList},

            {path:'**', component:Notfound}
        ]
    },
    
];
