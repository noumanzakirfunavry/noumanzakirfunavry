import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { AmazonAlexaRoutingModule} from "./amazonAlexa-routing.module";
import { NgChartjsModule } from 'ng-chartjs';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { AmazonAlexaFilterComponent } from './amazonAlexaFilter/amazonAlexa-filter.component';
import { AmazonAlexaComponent } from './amazonAlexa.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';




const antdModule = [
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzRateModule,
    NzBadgeModule,
    NzProgressModule,
    NzRadioModule,
    NzTableModule,
    NzDropDownModule,
    NzTimelineModule,
    NzTabsModule,
    NzTagModule,
    NzListModule,
    NzCalendarModule,
    NzToolTipModule,
    NzCheckboxModule,
    NzFormModule,
    NzSwitchModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NzCascaderModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzIconModule,
    NzToolTipModule,
    NzButtonModule
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AmazonAlexaRoutingModule,
        NgChartjsModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        NzModalModule,
        NzTimePickerModule,
        NzUploadModule
    ],
    exports: [],
    declarations: [
        AmazonAlexaFilterComponent,
        AmazonAlexaComponent
    ],
    providers: [
        ThemeConstantService
    ],
})
export class AmazonAlexaModule { }
