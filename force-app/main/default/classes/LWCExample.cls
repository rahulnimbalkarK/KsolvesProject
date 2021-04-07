public with sharing class LWCExample {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAcountList(){
      List<Account> accList=[SELECT Id, Name, Phone, Rating, Industry FROM Account];
      return accList;
   }
}