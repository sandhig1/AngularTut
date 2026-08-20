//export const APIUrl:string = "http://angulartutapi.esoltechserv.com/api/";
export const APIUrl:string = "http://localhost:12472/api/";

export const globalMenus = {

    menuItems : [
        {
            label : "Dashboard",
            routeName : "dashboard",
            allowRoles : ['sa', 'a']
        },
        {
            label : "Enquiry List",
            routeName : "enquirylist",
            allowRoles : ['sa', 'a', 'e']
        },
        {
            label : "Create Enquiry",
            routeName : "enquiry",
            allowRoles : ['a', 'e']
        },
        {
            label : "StateList",
            routeName : "statelist",
            allowRoles : ['sa', 'a']
        }, 
        {
            label : "State",
            routeName : "state",
            allowRoles : ['a']
        },
        {
            label : "CityList",
            routeName : "citylist",
            allowRoles : ['sa', 'a']
        }, 
        {
            label : "City",
            routeName : "city",
            allowRoles : ['a']
        }
    ]
}