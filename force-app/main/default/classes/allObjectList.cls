public class allObjectList {
   @AuraEnabled
	public static List<picklistWrapper> getAllCustomSObjects()
	{
        List<picklistWrapper> options = new List<picklistWrapper>();
        for(Schema.SObjectType d : Schema.getGlobalDescribe().values())
        {
            Schema.DescribeSObjectResult describeSObjectResultObj = d.getDescribe();
            
                picklistWrapper aa = new picklistWrapper();
                aa.label = d.getDescribe().getLabel();
                aa.value = d.getDescribe().getName();
               	options.add(aa);
            	
        }
        
        return options;
    }
    @AuraEnabled 
    public static List<picklistWrapper> showFields(String selectedObject){
        List<picklistWrapper> fields = new List<picklistWrapper>();
        for(Schema.SObjectField dfield : Schema.getGlobalDescribe().get(selectedObject).getDescribe().fields.getMap().Values())
        {		
            picklistWrapper aa = new picklistWrapper();
            aa.label = dfield.getDescribe().getLabel();
            aa.value = dfield.getDescribe().getName();
            fields.add(aa);
        }
        return fields;
    }
    @AuraEnabled 
    public static List<Object> getData(String selectedObject, String selectedFields){
        List<String> sObjectList = new List<String>();
        Type idArrType = Type.forName('List<string>');
        List<string> fields = (List<string>) JSON.deserialize(selectedFields, idArrType);
        String cols = '';
        Integer count = 0;
        for(String field : fields){
            if(count == fields.size()-1){
                cols = cols+field;
            }else{
             cols = cols+field+', ';   
            }
            count++;
        }
        String query = 'select '+cols+' from '+selectedObject;
        List<Object>result = Database.query(query);
        return result;
    }
    @AuraEnabled 
    public static List<Object> ShowData(String query){
        List<Object>result = Database.query(query);
        return result;
    }
    
    public class picklistWrapper{
        @AuraEnabled 
		public string label;
        @AuraEnabled 
		public string value;
        
    }
    

}