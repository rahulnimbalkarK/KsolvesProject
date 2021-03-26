global class scheduleMarkStudentRecordAsDelete implements Schedulable {
    
    global void execute (schedulableContext sc){
        MarkStudentRecordAsDelete stdRecords = new MarkStudentRecordAsDelete();
        database.executeBatch(stdRecords);
    }

}