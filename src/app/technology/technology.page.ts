import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ArticlesServiceService } from '../services/articles-service.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {

  public results: any;
  public topic: string = 'technology';

  constructor(private articles: ArticlesServiceService,
    private iab: InAppBrowser, private menuCtrl: MenuController) {}

  ngOnInit() {
    this.renderResults();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  renderResults() {
    this.articles.getArticles(this.topic).subscribe(results => {
      this.results = results;
    }, error => {
      console.log(error);
    });
  }

  openWebView(url) {
    this.iab.create(url, '_blank');
  }
}
