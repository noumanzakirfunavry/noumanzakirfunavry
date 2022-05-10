import { Component, Input, NgZone, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms';
import { requests } from '../../shared/config/config';


@Component({
       selector: 'tiny-editor',
    templateUrl: './tiny-editor.component.html',
    styles: [
        `
          [nz-button] {
            margin-right: 8px;
          }
        `
      ]
})

export class TinyEditorComponent implements OnInit{
    @Input() formField: FormGroup;
    isVisible = false;
    tinyConfig: any;

    constructor(private zone: NgZone) {}

    ngOnInit(): void {
        let selfp = this;
        this.tinyConfig = {
            apiKey:"pl277auj2y5uqk3nkk28sz4d32vimlj6ezd5b6t6vee325u4",
            base_url: '/tinymce',
            suffix: '.min',
            'plugins': [
                'code print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
                // "advlist autolink link image lists charmap print preview hr anchor pagebreak",
                // "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking",
                // "table contextmenu directionality emoticons paste textcolor responsivefilemanager code",
                // "advlist autolink lists link image charmap print preview anchor",
                // "searchreplace visualblocks code fullscreen",
                // "insertdatetime media table contextmenu paste qrcode youtube twitter"
            ],
            directionality : 'rtl',
            toolbar: 'undo redo | code bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            // toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
            'toolbar1' : "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | styleselect | fontselect | fontsizeselect",
            'toolbar2' : "youtube twitter | responsivefilemanager | link image qrcode | link unlink anchor | image media | forecolor backcolor  | print preview code ",
            'image_advtab': true,
            menu: {
                custom: { title: 'Custom File Manager', items: 'myCustomMenuItem' }
            },
            menubar: 'file edit view insert table custom format tools',
            setup: function (editor) {
                let self = selfp;
                editor.ui.registry.addMenuItem('myCustomMenuItem', {
                    text: 'Upload',
                    onAction:
                        (function () {
                            // self.$isVisible.next(true)
                            // alert('Menu item clicked' + self.isVisible);
                            self.toggleModal();
                        }).bind(this)
                })
            },
            images_upload_url: requests.addNewAttachment,
            automatic_uploads: true,
            file_picker_callback: function (callback, value, meta) {
                // Provide file and text for the link dialog
                if (meta.filetype == 'file') {
                    callback('mypage.html', { text: 'My text' });
                }

                // Provide image and alt text for the image dialog
                if (meta.filetype == 'image') {
                    callback('myimage.jpg', { alt: 'My alt text' });
                }

                // Provide alternative source and posted for the media dialog
                if (meta.filetype == 'media') {
                    callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
                }
            }
        }
    }

    toggleModal() {
        // setTimeout(() => {
            this.zone.run(e=>{
            this.isVisible = true
        })
        // }, 400);
    }

    closeModal(data) {
        this.isVisible=false
    }

    fileFromModal(file) {
        this.isVisible=false;
        this.formField.patchValue({
            content: this.formField.value.content ? this.formField.value.content+`<img src="${file.url}" width='100%' height='auto'>`:`<img src="${file.url}" width='100%' height='auto'>`,
          });
    }

}    