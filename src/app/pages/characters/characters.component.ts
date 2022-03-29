import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  public name: string = ''

  public characters: any
  public totalPages: number = 0
  public pages: string[] = ['-1','1']
  
  public num:number = 0

  constructor( private characterService: ApiService, private Router: Router, private router:ActivatedRoute ) {
    router.params.subscribe((params) => {
      if (params["num"]) {
        this.num = Number(params["num"])
        this.characterService.getCharacters(this.num*60).subscribe(
          res => {
            this.characters = res.data.results
            this.totalPages = res.data.total/60
          }
        )
      }
      this.pages = [(this.num-1).toString(), (this.num+1).toString()]
    });
  }

  ngOnInit(): void {
    this.characterService.getCharacters(this.num*60).subscribe(
      res => {
        this.characters = res.data.results
        this.totalPages = res.data.total/60
      }
    )
  }

  search() {
    this.characterService.getCharactersByName(this.name).subscribe(
      res => {
        this.characters = res.data.results;
        this.totalPages = res.data.total/60
      }
    )
  }
}
