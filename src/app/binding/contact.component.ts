import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  //templateUrl: './contact.component.html',
  template:`
  <div> <input #contactName type="text" placeholder="이름" /> </div>
  <div> <input #contactTele type="text" placeholder="전화번호" /> </div>
  <button (click)="handleClick(contactName.value, contactTele.value)"> 저장 </button>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Output() save: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  handleClick(name: string, tele: string): void {
    this.save.next({ name: name, telephone: tele });
  }

}
