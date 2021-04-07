trigger UpdateAccField on Contact (after insert,after update) { 
    
    Set<Id> accIdList = new Set<Id>();
    List<Account> accUpdateList = new List<Account>();
    List<String> lstSrting = new List<String>();
    
     for(Contact con : Trigger.new)
  {
     if(con.accountid!=null)
      accIdList.add(con.accountid);
  }     
    
for(Account acc : [Select id, Name, City__c,(Select Id,LastName From Contacts) From Account Where Id In : accIdList])

         {for(Contact con : acc.contacts)
                {
                    lstSrting.add(con.lastname);
                }
        if (String.isBlank(acc.City__c)) {
            acc.City__c += String.join(lstSrting, ',');
  			 
		} else {
 		   acc.City__c = String.join(lstSrting, ',');
		}
               accUpdateList.add(acc);
        }      
    update accUpdateList;
  }