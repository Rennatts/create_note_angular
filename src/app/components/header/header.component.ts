import { Component, OnInit} from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import {Note} from './../../Note';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
