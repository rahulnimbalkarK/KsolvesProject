({
    callCon : function(component, event, helper) {
        var con = component.get("v.con");
        var action = component.get("c.createContact");
        var accId = event.getParam("accId");
        action.setParams({"con": con, "accId":accId});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state==='SUCCESS'){
                var result = response.getReturnValue();
               // component.set()
            }
        });
        $A.enqueueAction(action);
    }
})