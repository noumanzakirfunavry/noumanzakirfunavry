import { Component, OnInit } from '@angular/core'
import { NzUploadFile } from 'ng-zorro-antd/upload';
// import tinymce from 'tinymce/tinymce';

// A theme is also required
// import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
// import {  } from "./../../../assets/lib/tinymce/js/tinymce/plugins/";
@Component({
    selector: 'app-addNews',
    templateUrl: './addNews.component.html'
})

export class AddNewsComponent implements OnInit {
    // @ViewChild('tinyMce', { static: false }) private tinyMce;
    previewImage = '';
    previewVisible = false;
    value: string[] = ['0-0-0'];

    tinyMCEConfig = {
        // base_url: 'apps/admin/src/assets/lib/tinymce/js/tinymce/',
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
        external_plugins: {
            'youtube': 'plugins/youtube/plugin.min.js',
            // 'maths': 'http://www.maths.com/plugin.min.js'
          },
        // file_browser_callback : 'myFileBrowser',
        'toolbar1': " undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | fontselect | fontsizeselect",
        'toolbar2' : "youtube twitter | link | image media | qrcode | link unlink anchor | forecolor backcolor | print preview code ",
        // 'toolbar2' : "youtube twitter | responsivefilemanager | link image qrcode | link unlink anchor | image media | forecolor backcolor  | print preview code ",
        'image_advtab': true,
        // 'templates' : [
        //     {'title' : "Test template 1", 'content' : "Test 1"},
        //     {'title' : "Test template 2", 'content' : "Test 2"},
        // ],
    }
    nodes = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-0',
                    key: '0-0-0',
                    isLeaf: true
                }
            ]
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
                {
                    title: 'Child Node3',
                    value: '0-1-0',
                    key: '0-1-0',
                    isLeaf: true
                },
                {
                    title: 'Child Node4',
                    value: '0-1-1',
                    key: '0-1-1',
                    isLeaf: true
                },
                {
                    title: 'Child Node5',
                    value: '0-1-2',
                    key: '0-1-2',
                    isLeaf: true
                }
            ]
        }
    ];

    editorConfig = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'align': [] }],
            ['link', 'image'],

            [{ 'direction': 'rtl' }],
            [{ 'font': [] }],
            [{ 'align': [] }],
        ]
    };
    commentListData = [
        {
            name: 'Lillian Stone',
            img: 'assets/images/avatars/thumb-8.jpg',
            date: '6 hours ago.',
            likes: 43,
            comment: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        },
        {
            name: 'Victor Terry',
            img: 'assets/images/avatars/thumb-9.jpg',
            date: '8 hours ago.',
            likes: 18,
            comment: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        },
        {
            name: 'Wilma Young',
            img: 'assets/images/avatars/thumb-10.jpg',
            date: '2 days ago.',
            likes: 95,
            comment: 'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.'
        }
    ];
    fileList = [
        {
            uid: -1,
            name: 'product-1.jpg',
            status: 'done',
            url: 'assets/images/others/product-1.jpg'
        },
        {
            uid: 0,
            name: 'product-2.jpg',
            status: 'done',
            url: 'assets/images/others/product-2.jpg'
        },
        {
            uid: 1,
            name: 'product-3.jpg',
            status: 'done',
            url: 'assets/images/others/product-3.jpg'
        }
    ];

    listOfOption: Array<{ label: string; value: string }> = [];
    size = 'default';
    singleValue = 'a10';
    multipleValue = ['a10', 'c12'];
    tagValue = ['a10', 'c12', 'tag'];


    // myFileBrowser (field_name, url, type, win) {

    //     // alert("Field_Name: " + field_name + "nURL: " + url + "nType: " + type + "nWin: " + win); // debug/testing
    
    //     /* If you work with sessions in PHP and your client doesn't accept cookies you might need to carry
    //        the session name and session ID in the request string (can look like this: "?PHPSESSID=88p0n70s9dsknra96qhuk6etm5").
    //        These lines of code extract the necessary parameters and add them back to the filebrowser URL again. */
    
    //     /* Here goes the URL to your server-side script which manages all file browser things. */
    //     var cmsURL = window.location.pathname;     // your URL could look like "/scripts/my_file_browser.php"
    //     var searchString = window.location.search; // possible parameters
    //     if (searchString.length < 1) {
    //         // add "?" to the URL to include parameters (in other words: create a search string because there wasn't one before)
    //         searchString = "?";
    //     }
    
    //     // newer writing style of the TinyMCE developers for tinyMCE.openWindow
    
    //     this.tinyMce.openWindow({
    //         file : cmsURL + searchString + "&type=" + type, // PHP session ID is now included if there is one at all
    //         title : "File Browser",
    //         width : 420,  // Your dimensions may differ - toy around with them!
    //         height : 400,
    //         close_previous : "no"
    //     }, {
    //         window : win,
    //         input : field_name,
    //         resizable : "yes",
    //         inline : "yes",  // This parameter only has an effect if you use the inlinepopups plugin!
    //         editor_id : this.tinyMce.selectedInstance.editorId
    //     });
    //     return false;
    //   }

    onChange($event: string[]): void {
        console.log($event);
    }
    
    ngOnInit(): void {
        const children: Array<{ label: string; value: string }> = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;

      
    }
    // init(): (editor: import("tinymce/tinymce").Editor) => void {
    //     throw new Error('Method not implemented.');
    // }

    handlePreview = (file: NzUploadFile) => {
        this.previewImage = file.url || file.thumbUrl;
        this.previewVisible = true;
    }

    log(value: string[]): void {
        console.log(value);
    }
}    