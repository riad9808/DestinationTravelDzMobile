import { Component, OnInit, Input } from '@angular/core';
import { user } from '../models/user.model';
import { AuthServiceService } from '../service/auth-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  @Input() email;

  
  @Input() password;
  


  constructor(private auth:AuthServiceService,
    public alertController: AlertController) { 
      
    }

  ngOnInit() {
  }
  async alert(msg){
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  onClick(){
    let User:user=new user("","",
    
        this.email,"",
        
        this.password,""
    );
    console.log(this.email);
    this.auth.signInUser(User).then((msg)=>{
      this.alert(msg);
    })
    .catch((error)=>{
      this.alert(error.message);
    });
    
  }

}
