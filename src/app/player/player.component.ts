import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  players: any;

  constructor(private bServ: PlayerService) {}

  ngOnInit(): void {
    this.bServ.getPlayers().subscribe((res) => {
      console.log(res);
      this.players = res;
      //console.log(this.players);
    });
    //console.log(this.players);
  }
}
