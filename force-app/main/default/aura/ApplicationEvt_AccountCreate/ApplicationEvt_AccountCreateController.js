({
    addAcc : function(component, event, helper) {
        var acc = component.get("v.acc");
        var action = component.get("c.createAccount");
        action.setParams({"acc":acc});
        action.setCallback(this, function(response){
            var state=response.getState();
            if(state==='SUCCESS'){
                var result = response.getReturnValue();
                if(result!='Error'){
                    var evt = $A.get("e.c:Account_Create_Event");
                    evt.setParams({"accId": result});
                    evt.fire();
                }
            }
        });
        $A.enqueueAction(action);
    }
})
