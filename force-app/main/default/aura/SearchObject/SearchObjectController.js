({
	    
    doInit: function(component, event, helper) {
        
        var action = component.get("c.getAllCustomSObjects");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.options", response.getReturnValue());
               
            }
        })
        $A.enqueueAction(action);
    },
    
    onchangeObject: function(component, event, helper){
        var selectedObj = component.get("v.selectedObject");
        var action = component.get("c.showFields");
        action.setParams({"selectedObject": selectedObj });
        action.setCallback(this, function(response) {
           var state = response.getState();
           if (state === "SUCCESS") { 
             var result= response.getReturnValue();
             component.set("v.fieldOptions",result );
            }
        });
        $A.enqueueAction(action);
    },
    getQuery: function(component, event, helper){
        var object = component.get("v.selectedObject");
        var fields = component.get("v.selectedObject2");
        var str = "Select ";
        var count =0;
        fields.forEach(function(val, key){
            
            if(count == fields.length-1){
                str += val;
            }else{
             str += val;
             str +=', ';
            }
            count++;
         });
        str +=' from '+object;
        component.set("v.query", str);
    },
    showData: function(component, event, helper){
        var object = component.get("v.query"); 
        var fields = component.get("v.selectedObject2");
        var action = component.get("c.ShowData");
        
        var arr = [];
        fields.forEach(function(val, key){
            var b ={label: val, fieldName: val}; 
			arr.push(b);
         });
        action.setParams({
            "query": object,
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {        
		        component.set("v.fields", arr);
                component.set("v.outputData", response.getReturnValue());
                
            }
           
        });
        $A.enqueueAction(action);
    }
})