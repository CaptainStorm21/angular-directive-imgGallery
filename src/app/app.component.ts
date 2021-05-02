import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;

  checkWindowIndex( index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  /*images storage */
  images = [
    {
      title: 'Landscape',
      url: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'
    },
    {
      title: 'Morning Landscape',
      url: 'https://www.mickeyshannon.com/photos/zoom/mountain-photography.jpg'
    },
    {
      title: 'Mountains and Sky',
      url: 'https://www.mickeyshannon.com/photos/tunnel-view-sunset.jpg'
    },
    {
      title: 'Sunset',
      url: 'https://www.mickeyshannon.com/photos/cosmic-grand-teton.jpg'
    },
    {
      title: 'Birch',
      url: 'https://www.mickeyshannon.com/photos/zoom/aspen-alley-panorama.jpg'
    },
    {
      title: 'Interior Design',
      url: 'https://www.mickeyshannon.com/images/large/interior-design-for-business.jpg'
    },
    {
      title: 'Moraine Lake',
      url: 'https://media.gettyimages.com/photos/lake-moraine-in-banff-national-park-alberta-canada-picture-id480195516?s=2048x2048'
    },
    {
      title: 'Sunset Volcano',
      url: 'https://media.gettyimages.com/photos/bromo-volcano-at-sunrise-picture-id617723978?s=2048x2048'
    },
    {
      title: 'Indonesia Sky',
      url: 'https://media.gettyimages.com/photos/sunrise-over-east-java-indonesia-picture-id537852032?s=2048x2048'
    },
    {
      title: 'Mt Taranaki',
      url: 'https://media.gettyimages.com/photos/mt-taranaki-picture-id1129980085?s=2048x2048'
    },
  ];


}
