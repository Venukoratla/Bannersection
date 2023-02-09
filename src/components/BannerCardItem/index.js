import './index.css'

const Banner = props => {
  const {bannerCardsList} = props
  const {id, headerText, description, className} = bannerCardsList
  return (
    <li className={className} key={id}>
      <div className="text-container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show more</button>
      </div>
    </li>
  )
}

export default Banner
