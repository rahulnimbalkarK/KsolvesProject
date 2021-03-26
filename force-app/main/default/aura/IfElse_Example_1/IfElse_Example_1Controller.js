({
    call : function(component, event, helper) {
            var amount = component.find("amt").get("v.value");
            var year = component.find("yer").get("v.value");
            var rate = component.find("rat").get("v.value");
            var interest = (amount*year*rate)/100;
        if(interest>0){
            component.set("v.flag", false);
                      }
                component.set("v.amount",amount);
                component.set("v.year",year);
                component.set("v.rate",rate);
                component.set("v.interest",interest);
            
    }
})