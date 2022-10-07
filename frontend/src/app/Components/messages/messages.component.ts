import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OurMessagesService } from 'src/app/Services/our-messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private fb: FormBuilder, private msgService: OurMessagesService) { }

  ngOnInit(): void {
  }

  ErrorForm:boolean = false;
  SubmittedForm=false;

  MessageForm = this.fb.group({
    name : ['', [Validators.required]],
    Contact : ['', [Validators.required]],
    MessageS : '',
  })

  onSubmit(){
    if(this.MessageForm.valid){
      this.ErrorForm = false;
      this.msgService.sendMessage(this.MessageForm.value)
                      .subscribe(res=>{
                        console.log(res);
                        this.MessageForm.reset();
                        this.SubmittedForm=true;
                        setTimeout(() => this.SubmittedForm=false ,2000);
                        this.ngOnInit()
                      })

    }else{
      this.ErrorForm = true
    }
  }

}
