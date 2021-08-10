import { Component, OnInit} from '@angular/core';
import {Note} from './../../Note';
import {NoteService} from './../../services/note.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes => this.notes = notes));
    
  }

  addNote(note: Note){
    console.log(note);
    this.noteService.addNote(note).subscribe((note)=> (this.notes.push(note)));
  }

 

}
