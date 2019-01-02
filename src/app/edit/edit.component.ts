import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id;
  blog;
  constructor(private route:ActivatedRoute,private blogService:BlogService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id })
      this.blogService.getBlogById(this.id).subscribe(blog =>{ this.blog = blog })
    }

    renewBlog(title,description,author,image,imageTitle,imageSubtitle){
      // need subscribe to update info
      this.blogService.updateBlog(this.id,title,description,author,image,imageTitle,imageSubtitle).subscribe(()=> {
        this.router.navigate(['/home/1'])
      })
    }

  }
