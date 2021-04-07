public with sharing class Event_Example {
   @AuraEnabled
   public static string search(String accName, String accIndustry){
       String accId;
       List<Account> accountsList = [SELECT Id, Name, Industry, Phone, Rating FROM Account WHERE Name=:accName and Industry=:accIndustry];
       if (accountsList.size()==0) {
           accId='Error';
                     
       }else {
           accId=accountsList[0].Id;
       }
       return accId;
    }
       @AuraEnabled
       public static List<Contact> getContacts(String accId){
          List<Contact> contactList = [SELECT Id, LastName, firstName, Phone, Email  FROM Contact WHERE AccountId=:accId];
          return contactList;
       }
       @AuraEnabled
       public static List<Opportunity> getOpty(String accId){
          List<Opportunity> optyList=[SELECT Id, Name, StageName, Amount, CloseDate FROM Opportunity WHERE AccountId=: accId];
          return optyList;
       }

   
   }