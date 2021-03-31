({
    Add : function(component, event, helper) {
        var acc = component.get("v.newAccount");
        var action = component.get("c.insertAccount");
        action.setParams({"acc":acc});
        action.setCallback(this, function(response){
            var state= response.getState();
            if(state==='SUCCESS'){
                var evt= component.getEvent(childEvent);
                evt.fire();
            }
        });
        $A.enqueueAction(action);

    }
})