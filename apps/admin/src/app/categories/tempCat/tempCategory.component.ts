import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


interface ItemData {
    name: string;
    age: number | string;
    address: string;
    checked: boolean;
    expand: boolean;
    description: string;
    disabled?: boolean;
  }
  
  interface Setting {
   
    title: boolean;
    expandable: boolean;
    checkbox: boolean;
  }


  @Component({
    selector: 'app-tempCat',
    templateUrl: './tempCategory.component.html',
    styles: [
      `
        form nz-form-item {
          margin-right: 16px;
          margin-bottom: 8px;
        }
      `
    ]
  })

export class TempCatComponent implements OnInit {
    settingForm: FormGroup;
    listOfData: ItemData[] = [];
    displayData: ItemData[] = [];
    allChecked = false;
    indeterminate = false;
    settingValue: Setting;
    listOfSwitch = [
      { name: 'Title', formControlName: 'title' },
      { name: 'Expandable', formControlName: 'expandable' },
      { name: 'Checkbox', formControlName: 'checkbox' }
    ];
  
    refreshStatus(): void {
      const validData = this.displayData.filter(value => !value.disabled);
      const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
      const allUnChecked = validData.every(value => !value.checked);
      this.allChecked = allChecked;
      this.indeterminate = !allChecked && !allUnChecked;
    }
  
    checkAll(value: boolean): void {
      this.displayData.forEach(data => {
        if (!data.disabled) {
          data.checked = value;
        }
      });
      this.refreshStatus();
    }
  
    generateData(): ItemData[] {
      const data = [];
      for (let i = 1; i <= 100; i++) {
        data.push({
          name: 'John Brown',
          age: `${i}2`,
          address: `New York No. ${i} Lake Park`,
          description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
          checked: false,
          expand: false
        });
      }
      return data;
    }
  
    constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit(): void {
      this.settingForm = this.formBuilder.group({
        title: true,
        expandable: true,
        checkbox: true,
      });
      this.settingValue = this.settingForm.value;
      this.settingForm.valueChanges.subscribe(value => (this.settingValue = value));
      this.listOfData = this.generateData();
    }
  }