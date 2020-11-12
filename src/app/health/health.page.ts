import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ArticlesServiceService } from '../services/articles-service.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-health',
  templateUrl: './health.page.html',
  styleUrls: ['./health.page.scss'],
})
export class HealthPage implements OnInit {

  public results: any;
  public topic: string = 'health';

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
