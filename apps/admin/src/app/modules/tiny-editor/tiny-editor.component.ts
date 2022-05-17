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

export class TinyEditorComponent implements OnInit {
    @Input() formField: FormGroup;
    @Input() label = 'Content';
    @Input() error = 'Enter Content maximum 1500 characters allowed!';
    @Input() fieldName = 'content';
    isVisible = false;
    tinyConfig: any;

    constructor(private zone: NgZone) { }

    ngOnInit(): void {
        const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let selfp = this;
        this.tinyConfig = {
            apiKey: "pl277auj2y5uqk3nkk28sz4d32vimlj6ezd5b6t6vee325u4",
            base_url: '/tinymce',
            suffix: '.min',
            plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap tinycomments mentions quickbars linkchecker emoticons advtable export',
            directionality: 'rtl',
            menubar: 'file edit view insert format custom tools table tc help',
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            'image_advtab': true,
            mobile: {
                plugins: 'print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker textpattern noneditable help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable'
            },
            menu: {
                custom: { title: 'Custom File Manager', items: 'myCustomMenuItem' },
                tc: {
                    title: 'Comments',
                    items: 'addcomment showcomments deleteallconversations'
                }
            },
            skin: useDarkMode ? 'oxide-dark' : 'oxide',
            content_css: useDarkMode ? 'dark' : 'default',
            importcss_append: true,
            images_upload_url: requests.addNewAttachment,
            automatic_uploads: true,
            template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
            template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
            height: 600,
            image_caption: true,
            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
            noneditable_noneditable_class: 'mceNonEditable',
            toolbar_mode: 'sliding',
            spellchecker_ignore_list: ['Ephox', 'Moxiecode'],
            tinycomments_mode: 'embedded',
            content_style: '.mymention{ color: gray; }',
            contextmenu: 'link image imagetools table configurepermanentpen',
            a11y_advanced_options: true,
            // menubar: 'file edit view insert table custom format tools',
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
        this.zone.run(e => {
            this.isVisible = true
        })
        // }, 400);
    }

    closeModal(data) {
        this.isVisible = false
    }

    // fileFromModal(file) {
    //     this.isVisible=false;
    //     this.formField.patchValue({
    //         content: this.formField.value.content ? this.formField.value.content+`<img src="${file.url}" width='100%' height='auto'>`:`<img src="${file.url}" width='100%' height='auto'>`,
    //       });
    // }

    fileFromModal(file) {
        this.isVisible = false;
        if (file.attachmentType != 'VIDEO' && this.fieldName == 'content') {
            this.formField.patchValue({
                content: this.formField.value.fieldName ? this.formField.value.fieldName + `<img src="${file.url}">` : `<img src="${file.url}">`,
            });
        }
        else if (file.attachmentType != 'VIDEO' && this.fieldName != 'content') {
            this.formField.patchValue({
                description: this.formField.value.fieldName ? this.formField.value.fieldName + `<img src="${file.url}">` : `<img src="${file.url}">`,
            });
        }
        else if (file.attachmentType == 'VIDEO' && this.fieldName == 'content') {
            this.formField.patchValue({
                content: this.formField.value.fieldName ? this.formField.value.fieldName +
                    `<video controls><source src="${file.url}" ></video>` :
                    `<video controls><source src="${file.url}" ></video>`,
            });
        }
        else if (file.attachmentType == 'VIDEO' && this.fieldName != 'content') {
            this.formField.patchValue({
                description: this.formField.value.fieldName ? this.formField.value.fieldName +
                    `<video controls><source src="${file.url}" ></video>` :
                    `<video controls><source src="${file.url}" ></video>`,
            });
        }
    }

}    