import { Component, NgZone, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProgramsModel } from '../../common/models/programsModel';
import { requests } from '../../shared/config/config';
import { ApiService } from '../../shared/services/api.service';

@Component({
    selector: 'app-add-programs',
    templateUrl: './add-programs.component.html'
})

export class AddProgramsComponent implements OnInit{
  currentDate = new Date()
  programsModel: ProgramsModel;
  programForm: FormGroup;
  tinyConfig: any;
  isVisible: boolean;
  file: any;
  programId: number;
  tempFile: { colName: string, value: any, label: string } = { 'colName': 'file', value: null, label: 'Video Upload' }
  tempThumbanilFile: { colName: string, value: any, label: string } = { 'colName': 'thumbnail', value: null, label: 'Image Upload' }
  
    constructor(
      private fb: FormBuilder, 
      private zone: NgZone, 
      private route: Router, 
      private apiService: ApiService, 
      private activatedRoute: ActivatedRoute, 
      private message: NzMessageService) {}
  
    ngOnInit(): void {
      this.programsModel = new ProgramsModel();
      this.activatedRoute.params.subscribe(params => {
        this.programId = parseInt(params.id);
        if (this.programId) {
            this.getProgramById()
        } else {
            this.initForm();
        }
    })
      let selfp = this;
      this.tinyConfig = {
          apiKey: "pl277auj2y5uqk3nkk28sz4d32vimlj6ezd5b6t6vee325u4",
          base_url: '/tinymce',
          suffix: '.min',
          'plugins':
              'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',

          // 'code print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons'
          // "advlist autolink link image lists charmap print preview hr anchor pagebreak",
          // "searchreplace wordcount visualblocks visualchars insertdatetime media nonbreaking",
          // "table contextmenu directionality emoticons paste textcolor responsivefilemanager code",
          // "advlist autolink lists link image charmap print preview anchor",
          // "searchreplace visualblocks code fullscreen",
          // "insertdatetime media table contextmenu paste qrcode youtube twitter"

          directionality: 'rtl',
          menubar: 'file edit view insert format custom tools table help',
          toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          'image_advtab': true,
          menu: {
              custom: { title: 'Custom', items: 'myCustomMenuItem' }
          },
          // menubar: 'file edit view insert table custom format tools',
          setup: function (editor) {
              const self = selfp;
              editor.ui.registry.addMenuItem('myCustomMenuItem', {
                  text: 'Upload',
                  onAction:
                      (function () {
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
      this.initForm();
    }

    initForm() {
      this.programForm = this.fb.group({
          firstAiredOn: [new Date(), []],
          title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          description: [null, [Validators.required, Validators.maxLength(1500)]],
          isActive: [true],
          seoTitle: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          slugLine: [null, [Validators.required, Validators.maxLength(250)]],
          seoDescription: [null, [Validators.required, Validators.maxLength(250)]],
          keywords: [null, [Validators.required]],
          file: [null, [Validators.required]],
          thumbnail: [null, [Validators.required]],
          orders: [1, [Validators.required]],
          producedBy: ['CNBC NEWS', [Validators.required]]
      });
  }

    programs(): void {
        for (const i in this.programForm.controls) {
          this.programForm.controls[i].markAsDirty();
          this.programForm.controls[i].updateValueAndValidity();
        }
        if(this.programForm.valid) {
          const obj= this.programForm.value;
          this.apiService.sendRequest(requests.addNewProgram, 'post', { ...this.programsModel.toServerModal(obj, this.programsModel.seoDetailId), ...this.programId ? { id: this.programId } : null }).subscribe((res:any) => {
            console.log("PROGRAM", res);
            this.initForm();
                this.route.navigateByUrl('programs/list')
                if (this.programId) {
                    this.message.create('success', `Program Updated Successfully`)
                }
                else {
                    this.message.create('success', `Program Added Successfully`)
                }
          })
        }
  }

  getProgramById() {
    this.apiService.sendRequest(requests.getProgramById + this.programId, 'get').subscribe((res: any) => {
        console.log("program data", res.response.program);
        this.programsModel.populateFromServerModal(res.response.program);
        this.programsModel.seoDetailId = res.response.program.seoDetailId;
        console.log("view modal", this.programsModel);
        this.populateProgramsForm(res.response.program);
    })
}

    populateProgramsForm(program: any) {
      this.programForm = this.fb.group({
        firstAiredOn: [new Date(program.updatedAt), []],
        title: [program?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        description: [program?.description || null, [Validators.required, Validators.maxLength(1500)]],
        isActive: [program?.isActive],
        seoTitle: [program?.seoDetail?.seoTitle || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        slugLine: [program?.seoDetail?.slugLine || null, [Validators.required, Validators.maxLength(250)]],
        seoDescription: [program?.seoDetail?.seoDescription || null, [Validators.required, Validators.maxLength(250)]],
        keywords: [program?.seoDetail?.keywords || null, [Validators.required]],
        file: [program?.file || null, [Validators.required]],
        thumbnail: [program?.thumbnail || null, [Validators.required]],
        orders: [program?.orders || 1, [Validators.required]],
        producedBy: [program?.producedBy || 'CNBC NEWS', [Validators.required]]
    });
    }

    toggleModal() {
        this.zone.run(e => {
            this.isVisible = true
        })
  }

    closeModal(data) {
        this.isVisible = false
  }

    fileFromModal(file) {
        this.isVisible = false;
        this.programForm.patchValue({
            content: this.programForm.value.content ? this.programForm.value.content + `<img src="${file.url}">` : `<img src="${file.url}">`,
        });
  }

    mainFileUploaded(file) {
          this.programsModel.promoId = file.id;
          this.programsModel.videoUrl = file.url;
  }

    thumbnailUploaded(file) {
      this.programsModel.thumbnailId = file.id;
      this.programsModel.thumbnailUrl=null;
      setTimeout(() => {
          this.programsModel.thumbnailUrl = file.url;
      }, 400);
  }

    reset(data) {
    this.file = null;
    this.programsModel.promoId = null;
    this.programsModel.videoUrl = null;
  }

    resetThumbnail(data) {
    this.programsModel.thumbnailId = null;
    this.programsModel.thumbnailUrl = null;
  }

    mainFileSelection(event) {
    console.log("file selected", event);
    this.programsModel.videoUrl = null;
  }

    thumbnailFileSelection(event) {
    console.log("thubnail file selected", event);
    this.programsModel.thumbnailUrl = null;
  }

    getCaptcha(e: MouseEvent): void {
      e.preventDefault();
  }

    cancel(): void {
      this.route.navigateByUrl('programs/list');
  }
   
}    