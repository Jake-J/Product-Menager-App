import { Component } from '@angular/core'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  stylesheetUrl = './app.component.css';

  fontsize: number;
  colorset = {
    "product-row-font": "#000",
    "product-table-head-bg": "#d7d7d7",
    "product-table-border-bot": "#b2b2b2",
    "product-row-even-bg": "#e9e9e9",
    "product-row-odd-bg": "#f9f9e9",
    "detail-dialog-head-bg": "#46af93",
    "distributor-item-font": "#fff",
    "distributor-item-bg": "#005f5f",
    "action-message-bg": "#dfdfdd",
    "action-message-font": "#cdcdcd",
    "header-bg": "#1b8e7b",
    "nav-list-bg": "#444",
    "nav-link-font": "#fff",
    "nav-link-bg-hover":"#005f5f",
    "nav-link-font-hover":"#fff",
    "active-route-bg": "#e6efee",
    "active-route-font": "#444"

  }

  setFontsize(size){
    this.fontsize = size;
  }

}
