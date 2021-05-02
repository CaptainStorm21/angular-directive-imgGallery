import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 0;
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
  ]
}
