({
    callMe  : function(component, event, helper) {
        var columns= [
            {label: 'Account name', fieldName: 'Name', type: 'text'},
            {label: 'Account Phone', fieldName: 'Phone', type: 'text'},
            {label: 'Industry', fieldName: 'Industry', type: 'text'},
            {label: 'Rating', fieldName: 'Rating', type: 'text'}
        ];
        component.set("v.columns", columns);
        var action = component.get("c.getData");
        action.setCallback(this, function(response){
            var state= response.getState();
            if(state==='SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.accounts",result);
            }
        });
        $A.enqueueAction(action);
    },
    show  : function(component, event, helper) {
        var action = component.get("c.getData");
        action.setCallback(this, function(response){
            var state= response.getState();
            if(state==='SUCCESS'){
                var result = response.getReturnValue();
                component.set("v.accounts",result);
            }
        });
        $A.enqueueAction(action);
    }
})