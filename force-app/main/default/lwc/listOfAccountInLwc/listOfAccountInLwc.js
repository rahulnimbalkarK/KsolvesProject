import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/LWCNewExample.getAccount'
export default class ListOfAccountInLwc extends LightningElement {
    @wire(getAccount)
    newaccountlist;
}