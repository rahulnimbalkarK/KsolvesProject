import { LightningElement, track, wire } from 'lwc';
import getObjectNames from "@salesforce/apex/allsObjectField.getObjectNames";
import getObjectFields from "@salesforce/apex/allsObjectField.getObjectFields";
import getRecord from "@salesforce/apex/allsObjectField.getRecord";
export default class AllsObjectQueryGenreator extends LightningElement {
   
    @track ObjectValue = 'inProgress';
    @track ObjectInfo = {data: []};
@wire(getObjectNames) ObjectInfo;
    get ObjectOptions() {
        var options = []
        for (const e in this.ObjectInfo.data) {
            options.push( { label: this.ObjectInfo.data[e], value: this.ObjectInfo.data[e] })
        }
        return options;
    }

    ObjectHandleChange(event) {
        this.ObjectValue = event.detail.value;
        this.Query = '';
    }

    @track FieldsValue = '';
    @track FieldInfo = {data: []};
    @wire(getObjectFields,{objs: "$ObjectValue"}) FieldInfo;
    get FieldsOptions() {
        var options = [];
        for (const e in this.FieldInfo.data) {
            options.push( { label: this.FieldInfo.data[e].split(',')[0], value: this.FieldInfo.data[e].split(',')[0] })
        }
        return options;
    }
    FieldsHandleChange(event){
        this.FieldsValue = event.detail.value;
        this.generateQuery();
    }

    VaValue = 'list';

    get VaOptions() {
        return [
            { label: 'List', value: 'list' },
            { label: 'Matrix', value: 'matrix' },
            { label: 'Bulk Csv', value: 'bulkCsv' },
            { label: 'Bulk Xml', value: 'bulkXml' },
        ];
    }

    VaHandleChange(event) {
        this.VaValue = event.detail.value;

    }


    generateQuery(){
        this.Query = 'SELECT ' + this.FieldsValue + ' FROM '+ this.ObjectValue ;
    }

    
    @track record = {data:[]};
    @track cols = [];

    queryButtonHandler(event){
        this.record.data  = [];
        this.cols=[];
        
        this.record.data  = [];
        this.cols=[];
        this.record.bool = false;

       
        
        
        getRecord({query : this.Query})
                .then(result => {
                    
                    
                    this.record.data = result;
                    var t = [];
                    for(const i in this.record.data){
                        var x = Object.keys(this.record.data[i]);
                        if(x.length > t.length){
                            t = x
                        }
                    }
                    this.FieldsValue = t;

                    for(const i in t){
                        this.cols.push({label:t[i],fieldName:t[i]});
                        
                    }

                    

                    if(this.VaValue == 'list'){
                        this.record.bool = true;
                    }                     
                        for(let i=0; i < result.length; i++){
                            let colValue = 0;
                            for(let key in t) {
                                if(t.hasOwnProperty(key)) {
                                    let rowKey = t[key];
                                    if(colValue > 0){
                                       
                                    }
                                    let value = result[i][rowKey] === undefined ? '' : result[i][rowKey];
                                   
                                    colValue++;
                                }
                            }
                            
                        }
                    })
                .catch((error) => {
                })    
    }  
    
   
}