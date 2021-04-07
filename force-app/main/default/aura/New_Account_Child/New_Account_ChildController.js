({
    addMe : function(component, event, helper) {
       //Get the value of attribute newAccount
        var newAccount = component.get("v.newAccount");
        //Get the event whose name is  Rahul
        var myevent = component.getEvent("rahul");
        //Set the value of Attribute Acc in the event 
        myevent.setParams({"acc":newAccount});
        //fire the event 
        myevent.fire();
    }
})