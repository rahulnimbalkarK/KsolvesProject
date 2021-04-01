public with sharing class Account_Contact_CreateData {
    @AuraEnabled
    public static string createAccount(Account acc){
        string result;
        try {
            insert acc;
            result=''+acc.Id;
        } catch (Exception e) {
            result='Error';
        }
        return result;
    }
    @AuraEnabled
    public static string createContact(Contact con, String accId){
        String result;
        try {
            con.AccountId = accId;
            insert con;
            result= ''+ con.Id;
        } catch (Exception e) {
            result='Error';
        }
        return result;
    }
    
}
