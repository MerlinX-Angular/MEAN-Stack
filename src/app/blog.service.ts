import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //uri = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  getBlogs() {
    return this.http.get(`/blogs`)
  }

  getBlogById(id){
    return this.http.get(`/blogs/${id}`);
  }

  addBlog(title,description,author,image,date,imageTitle,imageSubtitle){
    const blog = {
      title:title,
      description:description,
      author:author,
      image:image,
      date:date,
      imageTitle:imageTitle,
      imageSubtitle:imageSubtitle
    }
    return this.http.post(`/blogs/add`,blog)
  }

  updateBlog(id,title,description,author,image,imageTitle,imageSubtitle) {
    const issue = {
      title:title,
      description:description,
      author:author,
      image:image,
      imageTitle:imageTitle,
      imageSubtitle:imageSubtitle
    }
    return this.http.post(`/blogs/update/${id}`,issue)
  }

  deleteBlog(id){
    return this.http.get(`/blogs/delete/${id}`);
  }

}
