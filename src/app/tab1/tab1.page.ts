import { Component } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private auth:AuthServiceService) {}
  onClick(){
    //this.auth.createNewUser('riad@gmail.com','123587').then();
  }
}
