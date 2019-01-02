import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // Without format moment(new Date()) will show time at 0 GMT
  date = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit() {}

  addBlog(title,description,author,image,imageTitle,imageSubtitle){
    this.blogService.addBlog(title,description,author,image,this.date,imageTitle,imageSubtitle).subscribe(()=> {
      this.router.navigate(['/home/1']) })
    }
  }
