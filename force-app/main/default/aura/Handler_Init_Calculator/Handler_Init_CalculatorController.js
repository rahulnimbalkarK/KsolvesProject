({
    show : function(component, event, helper) {
        var amount = component.get("v.Amount");
        var rate   = component.get("v.Rate");
        var year   = component.get("v.Year");
        var interest = (amount*rate*year)/100;
        component.set("v.Interest", interest);
    }
})
