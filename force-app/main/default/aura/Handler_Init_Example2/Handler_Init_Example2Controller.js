({
    show : function(component, event, helper) {
        component.set("v.empName", 'Rahul');
        component.set("v.Company",'ABC');
        component.set("v.Salary",10000);
        var aval = component.get("v.Aval");
        var bval = component.get("v.Bval");
        var cval = aval+bval;
        component.set("v.Cval",cval);
    }
})