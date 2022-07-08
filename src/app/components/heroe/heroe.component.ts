import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activeRoute: ActivatedRoute,
    private HeroeService: HeroesService
    ) { 
    
    this.activeRoute.params.subscribe( params => {
      console.log('Esto es lo que viene en el valor id: '+params['id']);
      this.heroe = this.HeroeService.getHeroe(params['id']);
      console.log(this.heroe);
    });

  }

  ngOnInit(): void {
    
  }

}
