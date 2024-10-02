interface IUpComing  {
    dates: {
      maximum: string
      minimum: string
    }
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      genre_ids: Array<number>
      id: number
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      release_date: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
    }>
    total_pages: number
    total_results: number
  }
  

  interface ITrendingMovies {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      id: number
      title: string
      original_language: string
      original_title: string
      overview: string
      poster_path: string
      media_type: string
      genre_ids: Array<number>
      popularity: number
      release_date: string
      video: boolean
      vote_average: number
      vote_count: number
    }>
    total_pages: number
    total_results: number
  }
  
  interface IPopularMovies {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      genre_ids: Array<number>
      id: number
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      release_date: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
    }>
    total_pages: number
    total_results: number
  }
  


  interface ITopRatedMovies {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      genre_ids: Array<number>
      id: number
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      release_date: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
    }>
    total_pages: number
    total_results: number
  }
  


  interface IDiscoverMovies {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      genre_ids: Array<number>
      id: number
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      release_date: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
    }>
    total_pages: number
    total_results: number
  }
  

  interface IDiscoverTV {
    page: number
    results: Array<{
      adult: boolean
      backdrop_path: string
      genre_ids: Array<number>
      id: number
      origin_country: Array<string>
      original_language: string
      original_name: string
      overview: string
      popularity: number
      poster_path: string
      first_air_date: string
      name: string
      vote_average: number
      vote_count: number
    }>
    total_pages: number
    total_results: number
  }
  