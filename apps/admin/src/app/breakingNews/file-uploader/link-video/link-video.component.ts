import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { cannotContainSpace, noWhitespaceValidator } from 'src/app/authentication/service/passwardMatch';
import { GenericValidatorService } from 'src/app/appService/generic-validator.service';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { contains } from 'jquery';
@Component({
  selector: 'link-video',
  templateUrl: './link-video.component.html',
  styleUrls: ['./link-video.component.css']
})
export class LinkVideoComponent implements OnInit {
  @Output() onFileSelection: EventEmitter<any> = new EventEmitter<any>();
  videoLink: string="";
  linkForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  $errorMessage: BehaviorSubject<any>=new BehaviorSubject<any>({});
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  constructor( 
    private formBuilder: FormBuilder,
    private el: ElementRef,
    private genericValidator:GenericValidatorService,
    ) { }

  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.linkForm = this.formBuilder.group({
      videolink: ['', Validators.compose([Validators.required,cannotContainSpace])]
    });
  }
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.linkForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(100)
    ).subscribe(value => {
      this.videoLink=value.videolink;
      this.displayMessage = this.genericValidator.processMessages(this.linkForm,false,false);
      this.$errorMessage.next(this.displayMessage)
    });
  }
  

  fileSelction() {
    console.log('link valid',this.linkForm.valid);
    if (this.linkForm.valid) {
    this.onFileSelection.emit({link:this.linkForm.value.videolink});
    }
    else{
      this.onFileSelection.emit({link:null});
    }
  }

}
