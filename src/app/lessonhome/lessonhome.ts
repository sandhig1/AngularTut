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
    { lessonTitle : "1. Installation", lessonDesc : "Installation and Configuration of angular 22" , ComponentPath : "installation", Status: "Done"  },
    { lessonTitle : "2. Variables", lessonDesc : "Installation and Configuration of angular 22", ComponentPath : "variables", Status: "Partial"   },
    { lessonTitle : "3. Component", lessonDesc : "Installation and Configuration of angular 22", ComponentPath : "components",Status: "Partial"   },
    { lessonTitle : "4. Bindings", lessonDesc : "Installation and Configuration of angular 22" , ComponentPath : "bindings", Status: "Done"  },
    { lessonTitle : "5. Routing", lessonDesc : "Installation and Configuration of angular 22"  , ComponentPath : "routing",Status: "Partial" },
    { lessonTitle : "6. Directives", lessonDesc : "Installation and Configuration of angular 22"  , ComponentPath : "directives",Status: "Done" },
    { lessonTitle : "7. Control Flows", lessonDesc : "Installation and Configuration of angular 22"   , ComponentPath : "control-flows",Status: "Partial"},
    { lessonTitle : "8. Template Forms", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "template-forms", Status: "Done" },
    { lessonTitle : "9. Reactive Forms", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "reactive-forms", Status: "Done" },
    { lessonTitle : "10. Signal Forms", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "signal-forms", Status: "Done"},
    { lessonTitle : "11. Signal", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "signals", Status: "Pending"},
    { lessonTitle : "12. Pipes", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "pipes", Status: "Pending"},
    { lessonTitle : "13. CRUD Operations", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "crud-ops", Status: "Done"},
    { lessonTitle : "14. Reusable Components", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "reusable-comp" , Status: "Done"},
    { lessonTitle : "15. Custom Directives", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "custom-directives", Status: "Done"},
    { lessonTitle : "16. Services", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "services", Status: "Partial"},
    { lessonTitle : "17. Facade", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "facade", Status: "Pending"},
    { lessonTitle : "18. Role Based Menus", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "role-based-menus" , Status: "Partial"},
    { lessonTitle : "19. Route Guard", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "route-guard", Status: "Partial"},
    { lessonTitle : "20. JWT Token", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "jwt-token", Status: "Partial"},
    { lessonTitle : "21. Interceptor", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "interceptor" , Status: "Progress"},
    { lessonTitle : "22. ViewChild", lessonDesc : "Installation and Configuration of angular 22"   ,ComponentPath : "viewchild", Status: "Pending"},
    { lessonTitle : "23. Subject & Behavior Subject", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "signal-behaviorsignal" , Status: "Pending"},
    { lessonTitle : "24. <ng-template> & <ng-container>", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "signal-behaviorsignal" , Status: "Partial"},
    { lessonTitle : "25. rxjs", lessonDesc : "Installation and Configuration of angular 22"  ,ComponentPath : "rxjs" , Status: "Pending"},
  ]
}
