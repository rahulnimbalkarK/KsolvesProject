({
    callMe : function(component, event, helper) {
        var action = component.get("c.callAccount");
        //pass the parameters to the callAccount
        action.setParams({"name": "CSC", "rating":"Hot","industry":"Energy"});
        //write the callBack Action
        action.setCallback(this, function(respons){
            //get the state of the response
            var state =response.getState();
            if(state==='SUCCESS'){
                //if the state is success then get the return value
                var result = respons.getReturnValue();
            }
        });
        $A.enqueueAction(action);
    }
})
