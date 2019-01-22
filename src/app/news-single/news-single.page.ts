import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {
  article: any;
  constructor(private newsService: NewsServiceService) { }

  ngOnInit() {
    // console.log(this.newsService.currentArticle);
    this.article = this.newsService.currentArticle;
  }

}
