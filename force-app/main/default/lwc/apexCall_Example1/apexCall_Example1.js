import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/LWCNewExample.getAccount';
export default class ApexCall_Example1 extends LightningElement {
    @wire(getAccountList) accounts;
}