import { Component } from '@angular/core';
import { Weapon } from './weapon';
import { Weaponspec } from './weaponspec';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{title}}
    </h1>
    
    <div class="checkbox">
    <h2>
      <label>
        <input type="checkbox" [(ngModel)]="detail" />Sword
      </label>
     </h2>
    </div>
    <ul>
        <div *ngIf="detail">
          <h3><div>SWORD spec</div></h3>
          <ul>
            <li>ATK1 Rest: <input [(ngModel)]=swordspec.atk1_rest placeholder="rest" /> Frames: <input [(ngModel)]=swordspec.atk1_frames placeholder="frames" /></li>
            <li>ATK2 Rest: <input [(ngModel)]=swordspec.atk2_rest placeholder="rest" /> Frames: <input [(ngModel)]=swordspec.atk2_frames placeholder="frames" /></li>
            <li>ATK3 Rest: <input [(ngModel)]=swordspec.atk3_rest placeholder="rest" /> Frames: <input [(ngModel)]=swordspec.atk3_frames placeholder="frames" /></li>
            <li>PP Reg(s)<input [(ngModel)]=swordspec.reg placeholder="reg"/></li>
            <li>PP Rest/Frame: {{((swordspec.atk1_rest+swordspec.atk2_rest+swordspec.atk3_rest)/(swordspec.atk1_frames+swordspec.atk2_frames+swordspec.atk3_frames)+swordspec.reg/60) | number:'.2-2'}}</li>
            <li>Frames/PP: {{(1/((swordspec.atk1_rest+swordspec.atk2_rest+swordspec.atk3_rest)/(swordspec.atk1_frames+swordspec.atk2_frames+swordspec.atk3_frames)+swordspec.reg/60)) | number:'.2-2'}}</li>
          </ul>
         <li *ngFor="let sword of swords">
          <ul>
            <h3><li>PA name：{{sword.name_photonart}}</li></h3>
            <li>Consumption: {{sword.consumption}}</li>
            <li>Damage：<input [(ngModel)]=sword.damage placeholder="damage" /></li>
            <li>Frames：<input [(ngModel)]=sword.frames placeholder="frames" /></li>
            <li>Net DPS: {{(sword.damage/sword.frames*60) | number:'.2-2'}}</li>
            <li>Gross DPS: {{(sword.damage/(sword.frames+sword.consumption*(1/((swordspec.atk1_rest+swordspec.atk2_rest+swordspec.atk3_rest)/(swordspec.atk1_frames+swordspec.atk2_frames+swordspec.atk3_frames)+swordspec.reg/60)))*60) | number:'.2-2'}}</li>
          </ul>
         </li>
        </div>
    </ul>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orenomemo';
  swords = SWORDS;
  swordspec = SWORDSPEC;
}

const SWORDS: Weapon[] = [
  { name_weapon: 'sword', name_photonart: 'ライジング', damage: 2010, consumption: 20, frames: 146},
  { name_weapon: 'sword', name_photonart: 'ツイスター零(最短, 空中発動)', damage: 1580, consumption: 30, frames: 85},
  { name_weapon: 'sword', name_photonart: 'ノヴァストライク(チャージ2)', damage: 1895, consumption: 20, frames: 162},
  { name_weapon: 'sword', name_photonart: 'ライドスラッシャー(チャージ2, 空中発動)', damage: 2214, consumption: 25, frames: 146},
  { name_weapon: 'sword', name_photonart: 'オーバーエンド(ギア3)', damage: 4125, consumption: 40, frames: 298},
  { name_weapon: 'sword', name_photonart: 'ソニックアロウ', damage: 594, consumption: 25, frames: 40},
  { name_weapon: 'sword', name_photonart: 'JGソニック', damage: 755, consumption: 0, frames: 40},
  { name_weapon: 'sword', name_photonart: 'ギルティブレイク(チャージ2)', damage: 1100, consumption: 20, frames: 72},
  { name_weapon: 'sword', name_photonart: 'イグナイトパリング', damage: 1841, consumption: 25, frames: 190},
  { name_weapon: 'sword', name_photonart: 'JGイグナイトパリング', damage: 3068, consumption: 15, frames: 160},
];
const SWORDSPEC: Weaponspec = {
  atk1_rest: 9, atk1_frames: 48, atk2_rest: 9, atk2_frames: 40, atk3_rest: 10, atk3_frames: 52, reg: 5
};
