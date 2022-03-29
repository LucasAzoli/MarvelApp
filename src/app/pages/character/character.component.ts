import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/services/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {

  public userId!: string;

  public character!:Character;

  constructor(private characterService: ApiService, private router: ActivatedRoute, private Router: Router) {
    router.params.subscribe((params) => {
      this.userId = params["id"];
    });
  }

  ngOnInit(): void {
    this.characterService.getCharactersById(this.userId).subscribe(
      res => {
        this.character = res.data.results[0];
      }
    )
  }

}
