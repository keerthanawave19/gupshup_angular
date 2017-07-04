import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../model/movie';
import { MovieService } from '../service/movie.service';
@Component({
  selector: 'fav-app-movie',
  templateUrl: './favmovie.component.html',
  styleUrls: ['./favmovie.component.css']
})

export class FavMovieComponent  {

favmovies=[];
constructor(private route: ActivatedRoute, private movieService: MovieService) { }
// The movies get stored in the movies property as an object
ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.movieService.favmovies())
        .subscribe(favmovies => this.favmovies = favmovies);
    }


// clickonmovies(){
//       this.movieService.favmovies().subscribe(favmovies => this.favmovies = favmovies );
//       console.log("Clicked movies");
//     }
    ondelete(id:string)
  {
   	console.log("id in fav com.ts:"+id)
	  this.movieService.deletemovie(id).subscribe();
  }

}
