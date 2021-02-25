import { Component } from '@angular/core';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipa';

  constructor(private router: Router){}

  public queryField = new FormControl()
  public search = String;

  onSearch(){
  	this.search = this.queryField.value;
  	//console.log(this.search);
    this.router.navigate(['autores', {author: this.search}]);

  }
}
