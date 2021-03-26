global class MarkStudentRecordAsDelete implements Database.Batchable <sObject>,Database.Stateful {
    global integer count = 0;
    string query = '' ;
    global MarkStudentRecordAsDelete(){
        query = 'SELECT id,Name__c, Is_Registeration_Completed__c,Mark_For_Delete__c from Student__c WHERE Is_Registeration_Completed__c = False AND CreatedDate <= LAST_N_DAYS:2';
    }
    global database.QueryLocator start (Database.BatchableContext bc){ 
        return database.getQueryLocator(query);
    }    
    global void execute (database.BatchableContext bc , List<Student__c> studentRecords){
        for(Student__c std :studentRecords){
            std.Mark_For_Delete__c = 'Yes';  
        }
        try{
      
            database.saveresult[] ds =  Database.update(studentRecords,false);
                for(database.SaveResult d : ds){
                    if(d.issuccess()){
                        count++;
                    }                    
                }
            }
            catch(exception e){
            system.debug('update failed');
            }
    }    
    global void finish(database.BatchableContext bc){
        system.debug(count);
            //Send an email to the User after your batch completes
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {'nimbalkar.rahul100@gmail.com'};
            mail.setToAddresses(toAddresses);
            mail.setSubject('Batch Apex Job is done');
            mail.setPlainTextBody('Total' +'  '+ count +'  '+ 'Records updated sucessfully');
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
            
    }
}