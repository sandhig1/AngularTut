import { Component } from '@angular/core';
import { Mypageheader } from "../../reusable-comp/mypageheader/mypageheader";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lessonhome',
  imports: [Mypageheader, RouterLink],
  templateUrl: './lessonhome.html',
  styleUrl: './lessonhome.css',
})
export class Lessonhome {
  lessons = [
    { lessonTitle : "1. Installation", lessonDesc : "Installation and Configuration of angular 22" , ComponentPath : "installation", Status: "Pending"  },
    { lessonTitle : "2. Variables", lessonDesc : "We will learn different type of variables in angular 22", ComponentPath : "variables", Status: "Pending"   },
    { lessonTitle : "3. Component", lessonDesc : "<ul><li>Component directives specified by @component attribute</li><li> They are the building block of Angular application representing UI unit of application</li></ul>", ComponentPath : "components",Status: "Pending"   },
    { lessonTitle : "4. Bindings", lessonDesc : "<ul><li>What are Bindings in angula?<li><ll>Different Type of Bindings:\n<ul><li>1-way bindings?\n(Interpolation, Property Binding, & Property Binding)</li> <li>2-Way Binding \n (ngModel using formsModule directive)</li></ul></li>" , ComponentPath : "bindings", Status: "Partial"  },
    { lessonTitle : "5. Routing", lessonDesc : "Installation and Configuration of angular 22"  , ComponentPath : "routing",Status: "Partial" },
    { lessonTitle : "6. Directives", lessonDesc : "Installation and Configuration of angular 22"  , ComponentPath : "directives",Status: "Done" },
    { lessonTitle : "7. Control Flows", lessonDesc : "Installation and Configuration of angular 22"   , ComponentPath : "control-flows",Status: "Done"},
    { lessonTitle : "8. Template Forms", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "template-forms", Status: "Partial" },
    { lessonTitle : "9. Reactive Forms", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "reactive-forms", Status: "Partial" },
    { lessonTitle : "10. Signal Forms", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "signal-forms", Status: "Partial"},
    { lessonTitle : "11. Signal", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "signals", Status: "Done"},
    { lessonTitle : "12. Pipes", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "pipes", Status: "Pending"},
    { lessonTitle : "13. CRUD Operations", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "crud-ops", Status: "Pending"},
    { lessonTitle : "14. Reusable Components", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "reusable-comp" , Status: "Done"},
    { lessonTitle : "15. Custom Directives", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "custom-directives", Status: "Done"},
    { lessonTitle : "16. Services", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "service", Status: "Progress"},
    { lessonTitle : "17. Facade", lessonDesc : "<ul><li>Its an <b>Structure Pattern</b> that is used as Angular service to act as a <b>single point of entry between your component and complex background process</b> like API, Business logic etc</li><li>Its an <b>abstraction layer</b> that stops component to interact with inner high level complex logic like api</li><li>Its advantages are <b>1. Simpler Component, 2. Decoupled Architechture, 2. High Reusability, 4.Easier Testing</b></li></ul>"   ,ComponentPath : "facade", Status: "Done"},
    { lessonTitle : "18. Role Based Menus", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "role-based-menus" , Status: "Pending"},
    { lessonTitle : "19. Route Guard", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "route-guard", Status: "Pending"},
    { lessonTitle : "20. JWT Token", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "jwt-token", Status: "Pending"},
    { lessonTitle : "21. Interceptor", lessonDesc : "Middleware tool For inspecting, handling HTTP request and resonding gobally before request reach to server"  ,ComponentPath : "interceptor" , Status: "Done"},
    { lessonTitle : "22. rxjs", lessonDesc : "<ul><li>RXJS stands for Reactive Extension for JavaScript</li><li>Its a core library used to manage asynchronous operations, event handling & data streams</li></ul>", ComponentPath : "rxjs" , Status: "Progress"},
    { lessonTitle : "23. Subject & Behavior Subject", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "subject-behaviorsubject" , Status: "Done"},
    { lessonTitle : "24. ViewChild", lessonDesc : "Query mechanism for getting reference of element, directives and child component of angular 22"   ,ComponentPath : "viewchild", Status: "Done"},
    { lessonTitle : "25. <ng-container> & <ng-template>", lessonDesc : "Specialized elements for managing template logic & structure without using unecessary element in Angular 22"  ,ComponentPath : "ng-container-template" , Status: "Done"},
    
  ]
}
