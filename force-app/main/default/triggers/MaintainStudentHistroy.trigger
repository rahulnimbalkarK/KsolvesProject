trigger MaintainStudentHistroy on Student__c (after Update ) {
    // New list to store the old and new values of field
    List<Student__c> studentList = trigger.new;   
	List<Student_History__c> studentHistoryList = new List<Student_History__c>();
    	//context variable 
    if(trigger.isAfter || trigger.isUpdate){
        //  Iterating through each Student__c record to get the old and new values of updated record
        for (Student__c newValue : studentList){
            //getting old values 
            Student__c oldValues = Trigger.oldMap.get(newValue.id);
            
            	  Map<String, Object> fieldValues = newValue.getPopulatedFieldsAsMap();
            
       			  for (String fieldName : fieldValues.keySet()) {
                      
           			//System.debug(fieldName + '=' + fieldValues.get(fieldName));
           			//Compaire the old and new value of Student__c record
                      if(newValue.get(fieldName) != oldValues.get(fieldName) && 
                         ! (oldValues.get(fieldName) instanceof  DateTime) ){
                // Create new Student_History__c record with update value and Old value of Student record 
                      Student_History__c studentHistoryobj = new Student_History__c();
                      studentHistoryobj.Field_Name__c = fieldName;
                      studentHistoryobj.New_value__c = (string)newValue.get(fieldName);
                      studentHistoryobj.Old_Value__c = (string)oldValues.get(fieldName);
                      studentHistoryobj.Record_Id__c = newValue.id;
                      studentHistoryList.add(studentHistoryobj);
                      }
             }
        }
        insert studentHistoryList;
    }
}