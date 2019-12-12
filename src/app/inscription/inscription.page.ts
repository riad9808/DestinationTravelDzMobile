import { Component, OnInit, Input } from '@angular/core';
import { user } from '../models/user.model';
import { AuthServiceService } from '../service/auth-service.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  @Input() email;
  @Input() nom; 
  @Input() prenom;
  
  @Input() password;
  @Input() password2;

  constructor(private auth:AuthServiceService,
    public alertController: AlertController) { }

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
  async onClick(){
    if(this.password===this.password2){
      let User:user=new user(this.nom,this.prenom,
    
      this.email,"",
      
      this.password,""
      );
      console.log(this.email);
      this.auth.createNewUser(User)
        .then(()=>{
          this.alert("un lien de verification a été envoyer à votre addresse email");
        })
        .catch((error)=>{
          this.alert(error.message);
        });
    }else{
      this.alert('verifier les mots de passe');
      
  
     
    }
    
    
  }

}
