({
    callMe : function(component, event, helper) {
        var evt = event.getSource();
        var name = evt.get("v.name");        
        var myId = evt.getLocalId();//either name or id should be taken for operation
        var aval = component.get("v.Aval");
        var bval = component.get("v.Bval");
       var cval;
        if (name == 'add'){
            cval = parseInt(aval)+parseInt(bval);
            component.set("v.Cval", cval);
        } 
        else if(name=='sub'){
            cval = parseInt(aval)- parseInt(bval);
                component.set("v.Cval", cval);
            
        }else{
        component.set("v.Aval", null);
        component.set("v.Bval", null);
        component.set("v.Cval", null);
        }   
    }
})