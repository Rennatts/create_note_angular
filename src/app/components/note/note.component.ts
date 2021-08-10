import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Note } from './../../Note';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  @Output() onDeleteNote: EventEmitter<Note> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: any){
    this.onDeleteNote.emit(task);
  }

}
