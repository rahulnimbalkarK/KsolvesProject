({
    searchData : function(component, event, helper) {
        var name = component.get("v.accName");
        var industry = component.get("v.accIndustry");
        var action= component.get("c.search");
        action.setParams({"accName" : name, "accIndustry" : industry});
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state ==='SUCCESS'){
                var result = response.getReturnValue();
                if(result!='Error'){
                    var evt= $A.get("e.c:Application_Account_Event");
                    evt.setParams({"accId":result});
                    evt.fire();
                }
            }
        });
        $A.enqueueAction(action);

    }
})