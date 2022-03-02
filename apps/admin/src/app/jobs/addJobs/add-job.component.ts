import { Component, ViewChild } from '@angular/core'

@Component({
    selector: 'add-job',
    templateUrl: './add-job.component.html'
})

export class AddJobComponent {
    @ViewChild('tinyMce', { static: false }) private tinyMce;


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