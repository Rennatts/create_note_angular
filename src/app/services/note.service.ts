import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './../Note';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:5000/notes'

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.apiUrl)
  }

  deleteNote(note: Note): Observable<Task>{
    const url = `${this.apiUrl}/${note.id}`;
    return this.http.delete<Task>(url)
  }

  addNote(note: Note): Observable <Note>{
    this.addDate(note);

    return this.http.post<Note>(this.apiUrl, note, httpOptions)
  }

  private addDate(note: Note){
    note.date = new Date();
  }

  
}
