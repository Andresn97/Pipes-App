import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {

  public nameLower: string = 'andrés';
  public nameUpper: string = 'ANDRÉS';
  public nameTitle: string = 'aNDrÉs';

  public customDate: Date = new Date();

}
