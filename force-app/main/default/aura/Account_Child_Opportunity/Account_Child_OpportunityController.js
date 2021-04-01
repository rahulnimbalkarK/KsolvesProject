({
    callOpportunity : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},
            {label: 'StageName', fieldName: 'StageName', type: 'text'},
            {label: 'CloseDate', fieldName: 'CloseDate', type: 'date'},
            {label: 'Amount', fieldName: 'Amount', type: 'currency'},
           
        ]);
        var action = component.get("c.getOpty");
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
