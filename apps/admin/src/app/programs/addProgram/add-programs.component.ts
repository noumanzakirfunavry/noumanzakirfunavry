import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { filter } from 'rxjs';

@Component({
    selector: 'app-add-programs',
    templateUrl: './add-programs.component.html'
})

export class AddProgramsComponent {
    @ViewChild('tinyMce', { static: false }) private tinyMce;
    validateForm: FormGroup;
    uploading = false;
    fileList: NzUploadFile[] = [];

    editorConfig = {
      toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        
          ['blockquote', 'code-block'],
          [{ 'header': 1 }, { 'header': 2 }],               
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'size': ['small', false, 'large', 'huge'] }],  
          [{ 'align': [] }],
          ['link', 'image'] ,

          [{ 'direction': 'rtl' }], 
          [{ 'font': [] }],
          [{ 'align': [] }],
      ]
  }

  tinyMCEConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    height: 400,
    menubar: true,
    // 'selector' : 'textarea#tinymce',
    'directionality': 'rtl',
    'init_instance_callback': "",
    // 'width': 680,
    'relative_urls': false,
    // 'file_browser_callback' : "filemanager",
    'filemanager_title' : "Responsive Filemanager",
    // 'external_filemanager_path' : "/",
    // 'external_plugins' : [{
    //     "filemanager" : "'./filemanager/plugin.min.js'"
    // }],
    // 'theme' : 'modern',
    'fontsize_formats': "8pt 9pt 10pt 11pt 12pt 26pt 36pt",
    'plugins': [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak",
        "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking",
        "table contextmenu directionality emoticons paste textcolor responsivefilemanager code",
        "advlist autolink lists link image charmap print preview anchor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime media table contextmenu paste qrcode youtube twitter"
    ],
    file_browser_callback : 'myFileBrowser',
    'toolbar1': " undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | fontselect | fontsizeselect",
    'toolbar2' : "youtube twitter | link | image media | qrcode | link unlink anchor | forecolor backcolor | print preview code ",
    // 'toolbar2' : "youtube twitter | responsivefilemanager | link image qrcode | link unlink anchor | image media | forecolor backcolor  | print preview code ",
    'image_advtab': true,
    // 'templates' : [
    //     {'title' : "Test template 1", 'content' : "Test 1"},
    //     {'title' : "Test template 2", 'content' : "Test 2"},
    // ],
}

    submitForm(): void {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  
    get isHorizontal(): boolean {
      return this.validateForm.controls.formLayout?.value === 'horizontal';
    }
  
    constructor(private fb: FormBuilder, private http: HttpClient, private msg: NzMessageService) {}
  
    ngOnInit(): void {
      this.validateForm = this.fb.group({
        formLayout: ['horizontal'],
        fieldA: [null, [Validators.required]],
        filedB: [null, [Validators.required]]
      });
    }

    beforeUpload = (file: NzUploadFile): boolean => {
      this.fileList = this.fileList.concat(file);
      return false;
    };
  
    handleUpload(): void {
      const formData = new FormData();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.fileList.forEach((file: any) => {
        formData.append('files[]', file);
      });
      this.uploading = true;
      // You can use any AJAX library you like
      const req = new HttpRequest('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
        // reportProgress: true
      });
      this.http
        .request(req)
        .pipe(filter(e => e instanceof HttpResponse))
        .subscribe(
          () => {
            this.uploading = false;
            this.fileList = [];
            this.msg.success('upload successfully.');
          },
          () => {
            this.uploading = false;
            this.msg.error('upload failed.');
          }
        );
    }

    myFileBrowser (field_name, url, type, win) {

        // alert("Field_Name: " + field_name + "nURL: " + url + "nType: " + type + "nWin: " + win); // debug/testing
    
        /* If you work with sessions in PHP and your client doesn't accept cookies you might need to carry
           the session name and session ID in the request string (can look like this: "?PHPSESSID=88p0n70s9dsknra96qhuk6etm5").
           These lines of code extract the necessary parameters and add them back to the filebrowser URL again. */
    
        /* Here goes the URL to your server-side script which manages all file browser things. */
        const cmsURL = window.location.pathname;     // your URL could look like "/scripts/my_file_browser.php"
        let searchString = window.location.search; // possible parameters
        if (searchString.length < 1) {
            // add "?" to the URL to include parameters (in other words: create a search string because there wasn't one before)
            searchString = "?";
        }
    
        // newer writing style of the TinyMCE developers for tinyMCE.openWindow
    
        this.tinyMce.openWindow({
            file : cmsURL + searchString + "&type=" + type, // PHP session ID is now included if there is one at all
            title : "File Browser",
            width : 420,  // Your dimensions may differ - toy around with them!
            height : 400,
            close_previous : "no"
        }, {
            window : win,
            input : field_name,
            resizable : "yes",
            inline : "yes",  // This parameter only has an effect if you use the inlinepopups plugin!
            editor_id : this.tinyMce.selectedInstance.editorId
        });
        return false;
      }

   
}    