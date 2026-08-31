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
import { Statelist } from './statelist/statelist';
import { City } from './city/city';
import { CityList } from './city-list/city-list';
import { roleBasedGuard } from './role-based-guard';
import { Reusable } from './reusable/reusable';
import { Installation } from './installation/installation';
import { CustomDirectives } from './custom-directives/custom-directives';
import { Lessonhome } from './lessonhome/lessonhome';
import { Interceptor } from './interceptor/interceptor';
import { Viewchild } from './viewchild/viewchild';

export const routes: Routes = [
    {path:'', component:Apphome},
    {path:'login', component:Login},
    {path:'', component:Home, 
        children:[
            {path:'lessonhome', component:Lessonhome},
            {path:'dashboard', component:Dashboard, canActivate :[roleBasedGuard]},
            {path:'installation', component:Installation},
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
            {path:'reusable-comp', component:Reusable},
            {path:'custom-directives', component:CustomDirectives},
            {path:'interceptor', component:Interceptor},
            {path:'viewchild', component:Viewchild},

            {path:'enquiry', component:Enquiry, canActivate :[roleBasedGuard]},
            {path:'enquiry/:id', component:Enquiry},
            {path:'enquirylist', component:EnquiryList},

            {path:'state', component:State},
            {path:'state/:id', component:State},
            {path:'statelist', component:Statelist},

            {path:'city', component:City},
            {path:'city/:id', component:City},
            {path:'citylist', component:CityList},

            {path:'**', component:Notfound}
        ]
    },
    
];
