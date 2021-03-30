public class Example_Two {
@AuraEnabled
    public static string callAccount(string name, string rating, string industry){
        string result;
        try{
            Account acc = new Account();
            acc.Name= name;
            acc.Rating = rating;
            acc.Industry = industry;
            insert acc;
            result='insertion Succesfull == '+acc;
            
        }catch(exception e){
            result = 'Insertion failed=='+e.getMessage();
        }
        return result;
    }
}