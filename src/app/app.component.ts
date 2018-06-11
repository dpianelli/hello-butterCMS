import { Component, OnInit } from '@angular/core';
import { butterService } from './services/butterCMS.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  posts;

  fetchPosts() {
    butterService.post.list({
      page: 1,
      page_size: 10
    })
    .then((res) => {
      this.posts = res.data.data;
      console.log('Content from ButterCMS');
      console.log(res);
    });
  }

  ngOnInit() {
    this.fetchPosts();
  }
}
