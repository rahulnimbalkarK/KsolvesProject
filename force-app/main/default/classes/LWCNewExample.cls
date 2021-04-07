public with sharing class LWCNewExample {
@AuraEnabled
public static List<Account> getAccount(){
    
    List<Account> accountList = [SELECT Id, Name  FROM Account Limit 10];
    return accountList;
}
}