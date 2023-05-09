import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/app.service';

import { page } from './blog.page';

import { Observable } from 'rxjs';
import { SanityService } from '../../shared/sanity.service';

import { Post } from 'src/app/models/post';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  public page = page;
  blogPosts$: Observable<Post[]>;
  constructor(private appService: AppService, private sanityService: SanityService) { 
    appService.setPage(page);
    this.blogPosts$ = this.sanityService.fetch<Post[]>(
      `*[_type == "post"]{
        _id,
        title,
        slug,
        publishedAt,
        author->
      }`
    );
  }

  ngOnInit(): void {
  }

}
