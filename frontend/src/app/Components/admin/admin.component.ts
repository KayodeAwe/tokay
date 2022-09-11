import { Component, OnInit } from '@angular/core';
import { YoutubeLService } from 'src/app/Services/youtube-l.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private youtubeService: YoutubeLService, private fb: FormBuilder) { }

  url_id = "631e326c5105db0ae3011142"

  linkToLiveBroadcast = "";
  ErrorForm:boolean = false;

  ngOnInit(): void {
    this.youtubeService.getNewSingleAudioFile(this.url_id).subscribe(res =>{
      this.linkToLiveBroadcast = res.youtubeUrl,
      console.log(this.linkToLiveBroadcast),
      this.youtubeForm.patchValue({
        youtubeUrl: res.youtubeUrl,
      });
    })
  }

  youtubeForm = this.fb.group({
    youtubeUrl : ['', [Validators.required]]
  })

  myurl_id:string = "631e326c5105db0ae3011142"

  onSubmit(){
    if(this.youtubeForm.valid){
      console.log(this.youtubeForm.value)
      this.youtubeService.updateSingleUrl(this.myurl_id, this.youtubeForm.value).subscribe(res =>{
        console.log("updated link", res.youtubeUrl),
        this.ngOnInit()
      })
    }
    else{
      this.ErrorForm=true;
    }
  }

  updateYoutubelink(){

  }

}
