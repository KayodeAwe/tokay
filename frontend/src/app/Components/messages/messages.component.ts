import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ErrorForm:boolean = false;

  MessageForm = this.fb.group({
    Name : ['', [Validators.required]],
    Contact : ['', [Validators.required]],
    Message : '',
  })

  onSubmit(){
    this.ErrorForm = true
  }

}
