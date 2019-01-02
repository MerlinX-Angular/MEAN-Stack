import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  id;
  blog;
  constructor(private blogService:BlogService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( id => { this.id = id.get('id') })
    this.blogService.getBlogById(this.id).subscribe(blog =>{ this.blog = blog})
  }

}
