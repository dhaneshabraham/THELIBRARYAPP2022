import { Injectable } from '@angular/core';
import { book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  selectedBook: book;
  books: book[];
  readonly baseURL = 'http://localhost:3000/book';

  constructor(private http: HttpClient) { }


  postBook(bk: book) {
    console.log(bk);
    
    return this.http.post(this.baseURL, bk);
  }

  getBookList() {
    return this.http.get(this.baseURL);
  }

  putBook(bk: book) {
    return this.http.put(this.baseURL + `/${bk._id}`, bk);
  }

  deleteBook(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
