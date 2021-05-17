import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    title = 'Welcome to Lightning Web Component'
    @track isModalOpen = false;
    @track newPSbnt = false;

    @track isStep1 = true;
    @track isStep2 = false;
    @track isStep3 = false;
    //@track isStep4 = false;

    Step2() {

        // to open modal set isModalOpen tarck value as true
        this.isStep2 = true;
        //his.newPSbnt = false;
        this.isStep1 = false;
    }
    Previous1() {
        this.isStep1 = true;
        this.isStep2 = false;
        this.factorList = [];
        this.isFactor = false;
    }

    Step3() {
        this.isStep3 = true;
        this.isStep2 = false;
    }

    Previous2() {
        this.isStep2 = true;
        this.isStep3 = false;
    }

    @track keyIndex = 0;
    @track factorList = [];

    @track isFactor = false;
    addFactor() {
        this.isFactor = true;
        // eslint-disable-next-line no-unused-expressions
        this.keyIndex + 1;
        this.factorList.push({
            VG_Endorsement_Details__c: '',
            VG_Sub_limit__c: '',
            VG_Premium__c: '',
            VG_IsTempDelete__c: ''
        })
    }
    removeFactor(event) {
        console.log('Access key2:' + event.target.accessKey);
        console.log('>>' + event.target.id.split('-')[0]);
        if (this.factorList.length >= 0) {
            this.factorList.splice(event.target.accessKey, 1); //splice - is remove method in js
            console.log('remove::' + event.target.accessKey);
        }
    }

    value = '--None--';
    get industryOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Energy', value: 'Energy' },
            { label: 'Technology', value: 'Technology' },
            { label: 'Transportation', value: 'Transportation' },
            { label: 'Insurance', value: 'Insurance' },
            { label: 'Design and Construction', value: 'Design and Construction' },

        ];
    }

    value1 = '--None--';
    get territoryOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Cyprus', value: 'Cyprus' },
            { label: 'United Kingdom', value: 'United Kingdom' },
            { label: 'Unites States', value: 'Unites States' },
            { label: 'China', value: 'China' },

        ];
    }

    valueHL = '--None--';
    get indstryHazardLevelOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Very High', value: 'Very High' },
            { label: 'High', value: 'High' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Low', value: 'Low' },
            { label: 'Very Low', value: 'Very Low' }
        ];
    }

    valueLT = '--None--';
    get listingTerritoryOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'ASX', value: 'ASX' },
            { label: 'APX', value: 'APX' },
            { label: 'USR', value: 'USR' },
            { label: 'CMP', value: 'CMP' },

        ];
    }

    valueMT = '--None--';
    get mappedTerritoryOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Europe', value: 'Europe' },
            { label: 'United Kingdom', value: 'United Kingdom' },
            { label: 'Unites States', value: 'Unites States' },
            { label: 'China', value: 'China' },
        ];
    }

    valueLC = '--None--';
    get yearOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }

    valueAH = '--None--';
    get historyOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Good', value: 'Good' },
            { label: 'Average', value: 'Average' },
            { label: 'Poor', value: 'Poor' },
        ];
    }

    valueSP = '--None--';
    get stockOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Good', value: 'Good' },
            { label: 'Average', value: 'Average' },
            { label: 'Poor', value: 'Poor' },
        ];
    }

    valueFH = '--None--';
    get healthOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Good Condition', value: 'Good Condition' },
            { label: 'Satisfactory', value: 'Satisfactory' },
            { label: 'Average Condition', value: 'Average Condition' },
            { label: 'Poor Condition', value: 'Poor Condition' },
        ];
    }

    valueILF = '--None--';
    get iLFOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'High', value: 'High' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Low', value: 'Low' },
        ];
    }

    valueTime = '--None--';
    get timeOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Less than 5 years', value: 'Less than 5 years' },
            { label: 'More than 5 years', value: 'More than 5 years' },
        ];
    }

    valueWord = '--None--';
    get wordingOptions() {
        return [
            { label: '--None--', value: '--None--' },
            { label: 'Standard', value: 'Standard' },
            { label: 'Investment', value: 'Investment' },
            { label: 'Profit', value: 'Profit' },
            { label: 'Recession', value: 'Recession' }
        ];
    }

    steps = [{
            label: 'Company Information',
            value: 'step1',
        },
        {
            label: 'Exposure',
            value: 'step2'
        },
        {
            label: 'Layers',
            value: 'step3'
        },
    ];

}