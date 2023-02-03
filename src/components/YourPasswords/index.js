import './index.css'

const YourPasswords = props => {
  console.log('how are you')
  const {listDetails} = props
  const {id, website, userName, password, isItFalse} = listDetails

  const firstLetter = userName[0].toUpperCase()

  const starImage = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-image"
    />
  )

  const textORImage = isItFalse ? password : starImage

  return (
    <li className="usernameDetailContainer">
      <div className="DetailContainer">
        <div className="initial-style">{firstLetter}</div>
        <div>
          <p className="heading"> {website} </p>
          <p className="heading"> {userName} </p>
          {textORImage}
        </div>
      </div>
      <div className="deleteContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </div>
    </li>
  )
}

export default YourPasswords
