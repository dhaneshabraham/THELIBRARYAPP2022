import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  selectedBook!: Book;
  books:Book[] | undefined;
  // readonly baseURL = 'http://localhost:3000/books';
  baseURL='api';
  constructor(private http:HttpClient) { }
  postBook(bk: Book) {
    console.log(bk);
    return this.http.post(this.baseURL, bk);
  }

  getBookList() {
    return this.http.get(this.baseURL);
  }

  putBook(emp: Book) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
} 
