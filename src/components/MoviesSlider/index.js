import Slider from 'react-slick'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  const {moviesList} = props
  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem eachMovie={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
