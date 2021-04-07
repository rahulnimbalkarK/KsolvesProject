public class allsObjectField {
 @AuraEnabled(cacheable=true)
    public static List<String> getObjectNames(){
        List<String> sObjectList  = new List<String>();
        Map<String, Schema.SObjectType> mapStringObject = Schema.getGlobalDescribe();
        for(String k : mapStringObject.keySet()){
            sObjectList.add(mapStringObject.get(k).getDescribe().getName());
        }
        sObjectList.sort();
        return sObjectList;
    }


    @AuraEnabled(cacheable=true)
    public static List<String> getObjectFields(String objs){
        List<String> fieldList  = new List<String>();
        Map<String,Schema.SObjectField> mapStringField = Schema.getGlobalDescribe().get(objs).getDescribe().fields.getMap();
        for(String k : mapStringField.keySet()){
            fieldList.add(String.valueOf(mapStringField.get(k)) +','+String.valueOf(mapStringField.get(k).getDescribe().getType()));
        }
        fieldList.sort();
        return fieldList;
    }

    @AuraEnabled(cacheable=true)
    public static List<sObject> getRecord(String query){
           return Database.query(query);
    }
}