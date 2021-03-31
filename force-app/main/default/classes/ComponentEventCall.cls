public with sharing class ComponentEventCall {
    @AuraEnabled
    public static string insertAccount(Account acc){
        String result;

        try {
            insert acc;
            result='SUCCESS';
        } catch (Exception e) {
            result='Failed';
        }
        return result;
    }
    @AuraEnabled
    public static List<Account> getData(){

       List<Account> accountsList = [SELECT Id, Name, Phone, Rating, Industry FROM Account];
       return accountsList;
    }
}
