import { Component, OnInit } from '@angular/core';
import { YoutubeLService } from 'src/app/Services/youtube-l.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private youtubeService: YoutubeLService, private fb: FormBuilder) { }

  url_id = "631e326c5105db0ae3011142"

  linkToLiveBroadcast = "";
  ErrorForm:boolean = false;

  ngOnInit(): void {
    this.youtubeService.getNewSingleAudioFile(this.url_id).subscribe(res =>{
      this.linkToLiveBroadcast = res.youtubeUrl
    })
  }

  youtubeForm = this.fb.group({
    youtubeUrl : ['', [Validators.required]]
  })

  onSubmit(){

  }

  updateYoutubelink(){

  }

}
