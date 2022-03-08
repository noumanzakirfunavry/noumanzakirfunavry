import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'add-job',
    templateUrl: './add-job.component.html'
})

export class AddJobComponent {
    public Editor = ClassicEditor;
   
}    