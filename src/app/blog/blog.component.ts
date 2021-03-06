import { Component, OnInit } from '@angular/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Observable } from 'rxjs';
import { SanityService } from '../sanity-service.service';


export interface Author {
  name: String,
  slug: String,
  image: SanityImageSource
};
export interface Post {
  _id: String,
  title: String,
  slug: String,
  publishedAt: Date,
  author: Author
};
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts$: Observable<Post[]>;
  constructor(private sanityService: SanityService) { 
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
