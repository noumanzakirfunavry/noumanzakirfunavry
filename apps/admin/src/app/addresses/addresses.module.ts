import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { AddressesRoutingModule } from "./addresses-routing.module";
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { QuillModule } from 'ngx-quill';
import { FilterComponent } from './Filter/filter.component';
import { antdModule } from '../AndModules/andModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponentsShareModule } from '../demo-components-share/demo-components-share.module';
import { AddAddressesComponent } from './addresses/addAddresses.component';
import { AddressesComponent } from './addresses.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AddressesRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ...antdModule,
        DemoComponentsShareModule,
        QuillModule.forRoot(),
        NzUploadModule
    ],
    exports: [],
    declarations: [
        AddAddressesComponent,
        AddressesComponent,
        FilterComponent,
    ],
    providers: [
        ThemeConstantService
    ],
})
export class AddressesModule { }
