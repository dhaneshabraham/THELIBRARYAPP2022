import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { book } from '../shared/book.model';
import { NgForm }   from '@angular/forms';
declare var M: any;
@Component({
  selector: 'app-dispbooks',
  templateUrl: './dispbooks.component.html',
  styleUrls: ['./dispbooks.component.css']
})
export class DispbooksComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshBookList();
  }
  
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.bookService.selectedBook = {
      _id: "",
      Bname: "",
      Author: "",
      Price: null
    }
  }
  
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.bookService.postBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.bookService.putBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshBookList() {
    this.bookService.getBookList().subscribe((res) => {
      this.bookService.books = res as book[];
    });
  }

  onEdit(bk:book) {
    this.bookService.selectedBook = bk;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.bookService.deleteBook(_id).subscribe((res) => {
        this.refreshBookList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
