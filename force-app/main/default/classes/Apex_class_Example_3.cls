public with sharing class Apex_class_Example_3 {
    
        @AuraEnabled
        public static string getAccount(String name, String rating, String industry, String phone){
            String result;
            try {
                Account acc = new Account();
                acc.Name = name;
                acc.Rating = rating;
                acc.Industry = industry;
                acc.Phone = phone;
                insert acc;
                result = 'Insert Succesfull' +acc.Id;

            } catch (Exception e) {
                result = e.getMessage();
            } 
            return result;
        }
    }

