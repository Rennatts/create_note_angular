import { Component, OnInit} from '@angular/core';
import {Note} from './../../Note';
import { NoteService } from 'src/app/services/note.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes) => this.notes = notes);
  }

  deleteNote(note:Note){
    this.noteService
    .deleteNote(note)
    .subscribe(()=> (this.notes = this.notes.filter(t => t.id !== note.id)));
  }

  addNote(note: Note){
    this.noteService.addNote(note).subscribe((note)=> (this.notes.push(note)));
  }

}
