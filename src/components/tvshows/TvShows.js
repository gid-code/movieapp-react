import React, { Component } from 'react'
import MoviesList from '../movies/MoviesList'

export default class TvShows extends Component {
   render() {
      return (
         <div className="container mx-auto px-4 pt-16">
            <div className="popular-movies">
               <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
                  Popular Tv
               </h2>

               <MoviesList />
            </div>

            {/* end popular-movies */}

            <div className="now-playing-movies py-24">
                  <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
                     Top Rated Tv Shows
                  </h2>

                  <MoviesList />
            </div>
               {/* end now playing */}
         </div>
      )
   }
}
