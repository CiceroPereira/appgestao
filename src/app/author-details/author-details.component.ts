import { Component, OnInit, Inject } from '@angular/core';
import { AuthorService } from '../services/author.service';
import { Author } from '../models/author';
import { AppComponent} from '../app.component'
import { ActivatedRoute, Router} from '@angular/router'
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  name = new HttpParams();
  authores: Author[];

  constructor(private service: AuthorService, private route: ActivatedRoute) { }

  ngOnInit(){
  	this.route.params.subscribe(params => {this.name = params['author']});
  	this.service.getAuthor(this.name)
  	.subscribe(dados => this.authores = dados.Authores); 
  }

}
