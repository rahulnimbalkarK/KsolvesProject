public class DeleteRecordsAsMark implements Database.Batchable <sObject>{
    String query = '';
    public DeleteRecordsAsMark(){
    query = 'SELECT id,Name__c, Is_Registeration_Completed__c,Mark_For_Delete__c from Student__c WHERE Mark_For_Delete__c = \'Yes\' AND LastModifiedDate  = TODAY  '; 
    }
    public Database.QueryLocator start (Database.BatchableContext bc){
        
        return database.getQueryLocator(query);
    }
    public void execute(database.BatchableContext bc, List<sObject> records){
        delete records;
    }
    public void finish(database.BatchableContext bc){

    }
	
}