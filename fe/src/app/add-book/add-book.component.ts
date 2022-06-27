import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';
declare var M: any;
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [BookService]
})

export class AddBookComponent implements OnInit {

  constructor(public bookService:BookService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshBookList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.bookService.selectedBook = {
      _id: "",
      bname: "",
      author: "",
      about: "",
      price: null as any
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.bookService.postBook(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshBookList();

        var x:any
        x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);



        
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
      this.bookService.books = res as Book[];
    });
  }

  onEdit(bk: Book) {
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
