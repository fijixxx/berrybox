import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-weapon',
  templateUrl: './detail-weapon.component.html',
  styleUrls: ['./detail-weapon.component.css']
})
export class DetailWeaponComponent {

  //武器固有のプロパティを受け渡し
  @Input() weapons;
  @Input() weaponspec;

  //基本の通常攻撃のPP回復量を計算(平均)
  weapon_atkpp(){
    return (this.weaponspec.atk1_rest + this.weaponspec.atk2_rest + this.weaponspec.atk3_rest) / (this.weaponspec.atk1_frames + this.weaponspec.atk2_frames + this.weaponspec.atk3_frames);
  }

  //基本のPPの自然回復量を計算(5PP/s)
  common_regen(){
    return 5 / 60;
  }

  recup = 0; //通常攻撃のPP回復量の「上昇率」の初期値 (バインド)
  regup = 0;　 //PPの自然回復量の「上昇率」の初期値(バインド)
  lesscon = 0; //PA発動にかかるPP消費の「減少率」の初期値(バインド)

  //通常攻撃のPP回復量の倍率を計算
  Recovery(){
    if(isNaN(this.recup))return null;
    let recrate = 1;
    recrate = 1 + (this.recup / 100);
    return recrate;
  }

  //PPの自然回復量の倍率を計算
  Regene(){
    if(isNaN(this.regup))return null;
    let regrate = 1;
    regrate = 1 + (this.regup / 100);
    return regrate;
  }

  //PA発動にかかるPP消費量の倍率を計算
  Consum(){
    if(isNaN(this.lesscon))return null;
    let lessrate = 1;
    lessrate = 1 - (this.lesscon / 100);
    return lessrate;
  }

  //通常攻撃のPP回復量を計算
  mod_weapon_atkpp() {
    return this.Recovery() * this.weapon_atkpp();
  }

  //PPの自然回復量を計算
  mod_common_regen() {
    return this.Regene() * this.common_regen();
  }

}
