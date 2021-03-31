({
    callMe    : function(component, event, helper) {
        var columns= [
            {label: 'Account name', fieldName: 'Name', type: 'text'},
            {label: 'Account Phone', fieldName: 'Phone', type: 'text'},
            {label: 'Industry', fieldName: 'Industry', type: 'text'},
            {label: 'Rating', fieldName: 'Rating', type: 'text'}
        ];
        component.set("v.fields", columns);
    },
    
    show    : function(component, event, helper) {
        
        
        //get the account acc value from the event  
        var acc = event.getParam("acc");
        //get the values from attribute accounts 
        var accounts = component.get("v.accounts");
        //Add Acc to Accounts\
        accounts.push(acc);
        //set the new values of accounts to attributes 
        component.set("v.accounts",accounts);
    }
    
})