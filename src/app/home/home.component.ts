import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list;
  blogs;
  page = 1;
  currentPage;
  constructor(private blogService:BlogService,private router:Router,private route:ActivatedRoute) {
    this.route.paramMap
    .pipe(map(params => params.get('page')))
    .subscribe(page => this.currentPage = page) }

    ngOnInit() {
      this.fetchBlogs();
    }

    fetchBlogs(){
      this.blogService.getBlogs()
      .subscribe((data)=> {
        this.blogs = data;
        //  console.log('Data requested ...');
        // console.log('fetching data',this.blogs);
      })
    }

    editBlog(id){
      this.router.navigate(['/edit/'+id])
    }

    deleteBlog(id){
      this.blogService.deleteBlog(id).subscribe(()=> {
        this.fetchBlogs();
      })
    }

    pageChange(newPage: number) {
      // parasius queryParams atsiranda papildomas parametras linke ?page= puslapio-skaicius
      // this.router.navigate(['/home',newPage], { queryParams: { page: newPage } });
      this.router.navigate(['/home',newPage]);
    }

  }
