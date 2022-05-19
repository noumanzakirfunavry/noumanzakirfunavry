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
    isVisible: boolean;
    file: any;
    loading= true;
    loader= true;
    isLoading= false;
    allPrograms: any;
    episodeId: number;
    tempFile: { colName: string, value: any, label: string, showDelBtn: boolean } = { 'colName': 'file', value: null, label: 'Video Upload', showDelBtn: false }
    tempThumbanilFile: { colName: string, value: any, label: string, showDelBtn: boolean } = { 'colName': 'thumbnail', value: null, label: 'Image Upload', showDelBtn: false }

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
          this.isLoading= true;
          setTimeout(() => {
            this.isLoading= false
          }, 2000)
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
          if(this.episodesModel.videoUrl) {
            this.tempFile.showDelBtn = true;
          }
          if(this.episodesModel.thumbnailUrl) {
              this.tempThumbanilFile.showDelBtn = true;
          }
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
        this.tempFile.showDelBtn = true;
      }

      thumbnailUploaded(file) {
        this.episodesModel.thumbnailId = file.id;
        this.episodesModel.thumbnailUrl=null;
        this.tempThumbanilFile.showDelBtn = false;
        setTimeout(() => {
            this.episodesModel.thumbnailUrl = file.url;
            this.tempThumbanilFile.showDelBtn = true;
        }, 400);
    }

      reset(data) {
        this.file = null;
        this.episodesModel.videoId = null;
        this.episodesModel.videoUrl = null;
        this.episodesModel.thumbnailId = null;
        this.episodesModel.thumbnailUrl = null;
        this.tempFile.showDelBtn = false;
        this.tempThumbanilFile.value = null;
        this.tempThumbanilFile.showDelBtn = false;
      }
    
      resetThumbnail(data) {
        this.episodesModel.thumbnailId = null;
        this.episodesModel.thumbnailUrl = null;
        this.tempThumbanilFile.showDelBtn = false;
      }
    
      mainFileSelection(event) {
        console.log("file selected", event);
        this.episodesModel.videoUrl = null;
        this.tempFile.showDelBtn = true;
      }
    
      thumbnailFileSelection(event) {
        console.log("thubnail file selected", event);
        this.episodesModel.thumbnailUrl = null;
        this.tempThumbanilFile.showDelBtn = true;
      }
    
      getCaptcha(e: MouseEvent): void {
          e.preventDefault();
      }
    
      cancel(): void {
          this.route.navigateByUrl('episodes/list');
      }

}    