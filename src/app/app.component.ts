import { Component } from '@angular/core';
import { SWORDS, SWORDSPEC } from './data_sword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orenomemo';

  common_regen(){
    return 5 / 60;
  }

  recup = 0;
  regup = 0;
  lesscon = 0;

  Recovery(){
    if(isNaN(this.recup))return null;
    let recrate = 1;
    recrate = 1 + (this.recup / 100);
    return recrate;
  }

  Regene(){
    if(isNaN(this.regup))return null;
    let regrate = 1;
    regrate = 1 + (this.regup / 100);
    return regrate;
  }

  Consum(){
    if(isNaN(this.lesscon))return null;
    let lessrate = 1;
    lessrate = 1 - (this.lesscon / 100);
    return lessrate;
  }

  mod_sword_atkpp() {
    return this.Recovery() * this.sword_atkpp();
  }

  mod_common_regen() {
    return this.Regene() * this.common_regen();
  }

  swords = SWORDS;
  swordspec = SWORDSPEC;

  sword_atkpp(){
    return (SWORDSPEC.atk1_rest + SWORDSPEC.atk2_rest + SWORDSPEC.atk3_rest) / (SWORDSPEC.atk1_frames + SWORDSPEC.atk2_frames + SWORDSPEC.atk3_frames);
  }
}
