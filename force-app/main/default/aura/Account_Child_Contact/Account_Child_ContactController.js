({
    callContacts : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Last Name', fieldName: 'LastName', type: 'text'},
            {label: 'First Name', fieldName: 'FirstName', type: 'text'},
            {label: 'Phone', fieldName: 'Phone', type: 'phone'},
            {label: 'Email', fieldName: 'Email', type: 'email'},
           
        ]);
        var action = component.get("c.getContacts");
        var accId= event.getParam("accId");
        action.setParams({"accId":accId});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==='SUCCESS'){
                var result= response.getReturnValue();
                component.set("v.data", result);
                component.set("v.flag", true);
            }
        });
        $A.enqueueAction(action);
    }
})