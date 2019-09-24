import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postsList = [
    {
      title: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, assumenda delectus dignissimos doloremque error exercitationem facilis hic illo, impedit ipsum iste itaque iusto laborum laudantium magnam maxime obcaecati quo.',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, assumenda delectus dignissimos doloremque error exercitationem facilis hic illo, impedit ipsum iste itaque iusto laborum laudantium magnam maxime obcaecati quo.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, assumenda delectus dignissimos doloremque error exercitationem facilis hic illo, impedit ipsum iste itaque iusto laborum laudantium magnam maxime obcaecati quo.',
      loveIts: -1,
      created_at: new Date()
    },
  ];

}
