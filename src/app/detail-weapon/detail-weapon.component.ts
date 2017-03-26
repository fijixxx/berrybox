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

  //基本のPPの自然回復量を計算(5PP/s)
  Regene_base = () => 5 / 60;

  //基本の通常攻撃のPP回復量
  ATK_Rec_base = () => this.weaponspec.atk1_rest + this.weaponspec.atk2_rest + this.weaponspec.atk3_rest;

  //通常攻撃のフレーム数の合計
  ATK_Frames = () => this.weaponspec.atk1_frames + this.weaponspec.atk2_frames + this.weaponspec.atk3_frames;

  //基本のPP per Frames
  PPpF_base = () => this.ATK_Rec_base() / this.ATK_Frames();

    //基本のFrame per PP を計算
  FpPP_base = () => 1 / this.PPpF_base();

  recup: number = 0; //通常攻撃のPP回復量の「上昇率」の初期値 (バインド)
  rec_up_perhit: number = 0; //通常攻撃のPP回復量の「固定値上昇」の初期値 (バインド)
  regup: number = 0;　 //PPの自然回復量の「上昇率」の初期値(バインド)
  lesscon: number = 0; //PA発動にかかるPP消費の「減少率」の初期値(バインド)

  //通常攻撃のPP回復量の倍率を計算
  Recovery_rate = () => {
    if(isNaN(this.recup))return null;
    return 1 + (this.recup / 100);
  };

  //PPの自然回復量の倍率を計算
  Regene_rate = () => {
    if(isNaN(this.regup))return null;
    return 1 + (this.regup / 100);
  };

  //PA発動にかかるPP消費量の倍率を計算
  Consum_rate = () => {
    if(isNaN(this.lesscon))return null;
    return 1 - (this.lesscon / 100);
  };

  //通常攻撃 1/2/3 のPP回復量を計算

  atk_rest: number = 0; //通常攻撃の基本のPP回復量
  atk_hitcount: number = 0; //通常攻撃のヒット数
  atk_hitcount_gross: number = 0; //通常攻撃全体のヒット数
  atk_rec_gross: number = 0; //通常攻撃全体のPP回復量

  //+演算子を使って数値へ変換している
  ATK_Rec = (Rest:number, HitCount:number) => {
    this.atk_rest = Rest;
    this.atk_hitcount = HitCount;
    return +this.Recovery_rate() * this.atk_rest + +this.atk_hitcount * this.rec_up_perhit;
};

  //通常攻撃全体のPP回復量を計算
  ATK_Rec_gross = (HitCount1:number, HitCount2:number, HitCount3:number) => {
    this.atk_hitcount_gross = HitCount1 + HitCount2 + HitCount3;
    this.atk_rec_gross = (this.Recovery_rate() * this.ATK_Rec_base() + this.rec_up_perhit * this.atk_hitcount_gross) / this.ATK_Frames();
    return this.atk_rec_gross;
};

  //PPの自然回復量を計算

  regene_mod: number = 0;

  Regene_mod = () => {
    this.regene_mod = this.Regene_rate() * this.Regene_base();
    return this.regene_mod;
  };

  //PPpFを計算
  PPpF_mod = () => this.atk_rec_gross + this.regene_mod;

  //FpPPを計算
  FpPP_mod = () => 1 / this.PPpF_mod();

  //PAのPP消費量を計算
  Consumption = (index:number) => this.Consum_rate() * this.weapons[index].consumption;

  //純DPSを計算
  netDPS = (index:number) => this.weapons[index].damage / this.weapons[index].frames * 60;

  //基本の総DPSを計算
  grossDPS_base = (index:number) => this.weapons[index].damage / (this.weapons[index].frames + this.weapons[index].consumption * this.FpPP_base()) * 60;

  //総DPSを計算
  grossDPS_mod = (index:number) => this.weapons[index].damage / (this.weapons[index].frames + this.weapons[index].consumption * this.FpPP_base()) * 60;




  // aaa = () => Object.keys(this.weapons).length - 1;

}
