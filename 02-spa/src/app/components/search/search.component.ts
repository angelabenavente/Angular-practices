import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ],
})
export class SearchComponent implements OnInit {

  heros: any[] = [];
  textSearched: string;

  constructor( private activatedRoute: ActivatedRoute,
                private _herosService: HerosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.textSearched = params['hero'];
      this.heros = this._herosService.searchHeros( params['hero'] );
    })
  }


}
