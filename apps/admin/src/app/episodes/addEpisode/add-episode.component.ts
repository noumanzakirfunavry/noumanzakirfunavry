import { Component, NgZone, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { requests } from '../../shared/config/config';
import { ActivatedRoute, Router } from '@angular/router';
import { EpisodesModel } from '../../common/models/episodesModel';
import { ApiService } from '../../shared/services/api.service';
import { Pagination } from '../../common/models/pagination';

@Component({
    selector: 'add-episode',
    templateUrl: './add-episode.component.html'
})

export class AddEpisodeComponent implements OnInit {
    pagination: Pagination = new Pagination();
    public Editor = ClassicEditor;
    episodesModel: EpisodesModel;
    episodeForm: FormGroup;
    uploading = false;
    tinyConfig: any;
    isVisible: boolean;
    file: any;
    loading= true;
    loader= true;
    allPrograms: any;
    episodeId: number;
    tempFile: { colName: string, value: any, label: string } = { 'colName': 'file', value: null, label: 'Video Upload' }
    tempThumbanilFile: { colName: string, value: any, label: string } = { 'colName': 'thumbnail', value: null, label: 'Image Upload' }

    constructor(
      private fb: FormBuilder, 
      private message: NzMessageService, 
      private zone: NgZone, 
      private route: Router, 
      private apiService: ApiService, 
      private activatedRoute: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.getAllPrograms();
      this.episodesModel = new EpisodesModel();
      this.activatedRoute.params.subscribe(params => {
        this.episodeId = parseInt(params.id);
        if (this.episodeId) {
            this.getEpisodeById()
        } 
        else {
            this.initForm();
            setTimeout(() => {
              this.loader=false
            }, 200);
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
    }

    initForm() {
      this.episodeForm = this.fb.group({
          airedOn: [new Date(), []],
          title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          programId: [null, [Validators.required]],
          content: [null, [Validators.required, Validators.maxLength(1500)]],
          isActive: [true],
          seoTitle: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          slugLine: [null, [Validators.required, Validators.maxLength(250)]],
          seoDescription: [null, [Validators.required, Validators.maxLength(250)]],
          keywords: [null, [Validators.required]],
          file: [null, [Validators.required]],
          thumbnail: [null, [Validators.required]]
      });
    }

    toggleModal() {
          this.zone.run(e => {
          this.isVisible = true
      })
    }

    getAllPrograms() {
      this.apiService.sendRequest(requests.getAllPrograms, 'get', this.clean(Object.assign({...this.pagination}))).subscribe((res:any) => {
          this.allPrograms= res.response.program;
          console.log("ALL-PROGRAMS", this.allPrograms);
          this.loading= false;
      },err => {
          this.loading = false;
        })
  }

  clean(obj:any) {
    for (const propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "" || obj[propName] === []) {
        delete obj[propName];
      }
    }
    return obj
}

    episodes(): void {
        for (const i in this.episodeForm.controls) {
          this.episodeForm.controls[i].markAsDirty();
          this.episodeForm.controls[i].updateValueAndValidity();
        }
        if(this.episodeForm.valid) {
          const obj = this.episodeForm.value;
          this.apiService.sendRequest(this.episodeId ? requests.updateProgramEpisode + this.episodeId : requests.addProgramEpisode, this.episodeId ? 'put' : 'post', { ...this.episodesModel.toServerModal(obj, this.episodesModel.seoDetailId), ...this.episodeId ? { id: this.episodeId } : null }).subscribe((res:any) => {
            console.log("EPISODES", res);
            this.initForm();
            this.route.navigateByUrl('episodes/list')
            if (this.episodeId) {
                this.message.create('success', `Episode Updated Successfully`)
            }
            else {
                this.message.create('success', `Episode Added Successfully`)
            }
          })
        }
      }

      getEpisodeById() {
        this.apiService.sendRequest(requests.getProgramEpisodeById + this.episodeId, 'get').subscribe((res:any) => {
          console.log("EPISODE-BY-ID", res);
          this.episodesModel.populateFromServerModal(res.response.episode);
          this.episodesModel.seoDetailId = res.response.episode.seoDetailId;
          console.log("view modal", this.episodesModel);
          this.populateEpisodessForm(res.response.episode);
          setTimeout(() => {
            this.loader=false
          }, 200);
        })
      }

      populateEpisodessForm(episode: any) {
        this.episodeForm = this.fb.group({
          airedOn: [new Date(episode.updatedAt), []],
          title: [episode?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          programId: [episode?.programId || null, [Validators.required]],
          content: [episode?.content || null, [Validators.required, Validators.maxLength(1500)]],
          isActive: [episode?.isActive],
          seoTitle: [episode?.seoDetails?.title || null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          slugLine: [episode?.seoDetails?.slugLine || null, [Validators.required, Validators.maxLength(250)]],
          seoDescription: [episode?.seoDetails?.description || null, [Validators.required, Validators.maxLength(250)]],
          keywords: [episode?.seoDetails?.keywords || null, [Validators.required]],
          file: [null],
          thumbnail: [null]
      });
      }

      mainFileUploaded(file) {
        this.episodesModel.videoId = file.id;
        this.episodesModel.videoUrl = file.url;
      }

      thumbnailUploaded(file) {
        this.episodesModel.thumbnailId = file.id;
        this.episodesModel.thumbnailUrl=null;
        setTimeout(() => {
            this.episodesModel.thumbnailUrl = file.url;
        }, 400);
    }

      reset(data) {
        this.file = null;
        this.episodesModel.videoId = null;
        this.episodesModel.videoUrl = null;
      }
    
      resetThumbnail(data) {
        this.episodesModel.thumbnailId = null;
        this.episodesModel.thumbnailUrl = null;
      }
    
      mainFileSelection(event) {
        console.log("file selected", event);
        this.episodesModel.videoUrl = null;
      }
    
      thumbnailFileSelection(event) {
        console.log("thubnail file selected", event);
        this.episodesModel.thumbnailUrl = null;
      }
    
      getCaptcha(e: MouseEvent): void {
          e.preventDefault();
      }
    
      cancel(): void {
          this.route.navigateByUrl('episodes/list');
      }

}    