import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import YourPasswords from '../YourPasswords'

import './index.css'

class PasswordManager extends Component {
  state = {
    totalList: [],
    website: '',
    userName: '',
    password: '',
    isItFalse: false,
  }

  emptyList = () => {
    console.log('hai')
    return (
      <div className="emptyList-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="emptyListImage"
        />
        <p className="emptyListText"> No Passwords </p>
      </div>
    )
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  saveInList = event => {
    event.preventDefault()
    const {website, userName, password} = this.state

    const newList = {
      id: uuidv4(),
      website,
      userName,
      password,
      isItFalse: false,
    }

    this.setState(prevState => ({
      totalList: [...prevState.totalList, newList],
      website: '',
      userName: '',
      password: '',
    }))
  }

  showPasswordsList = () => {
    this.setState(prevState => ({
      totalList: prevState.totalList.map(eachTotalList => ({
        return {...eachTotalList, isItFalse: !eachTotalList.isItFalse}
      })),
    }))
  }

  render() {
    const {totalList, website, userName, password} = this.state

    return (
      <div className="app-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logo-image"
            alt="app logo"
          />
        </div>
        <form className="addPasswordContainer" onSubmit={this.saveInList}>
          <div className="addPasswordSubContainer">
            <h1 className="heading"> Add New Password </h1>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-img"
              />
              <div className="input-text-container">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                  value={website}
                />
              </div>
            </div>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-img"
              />
              <div className="input-text-container">
                <input
                  type="text"
                  className="input-text"
                  placeholder="Enter Name"
                  onChange={this.onChangeName}
                  value={userName}
                />
              </div>
            </div>
            <div className="inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="website-img"
              />
              <div className="input-text-container">
                <input
                  type="password"
                  className="input-text"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                  value={password}
                />
              </div>
            </div>
            <div className="button-container">
              <button className="button" type="submit">
                ADD
              </button>
            </div>
          </div>
          <div className="passwordManager-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="passwordManagerSmallImg"
              alt="password manager"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="passwordManagerBigImg"
              alt="password manager"
            />
          </div>
        </form>
        <div className="PasswordContainer">
          <div className="bottom-search-Container">
            <h1 className="heading"> Your Passwords </h1>
            <div className="bottom-inputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="password"
                className="website-img"
              />
              <div className="input-text-container">
                <input
                  type="password"
                  className="input-text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkboxId"
              className="checkBox-style"
              onClick={this.showPasswordsList}
            />
            <label htmlFor="checkboxId" className="label-style">
              Show Passwords
            </label>
          </div>
          <ul className="yourPasswordsList">
            {totalList.length !== 0 &&
              totalList.map(eachList => (
                <YourPasswords key={eachList.id} listDetails={eachList} />
              ))}
          </ul>
          {totalList.length === 0 && this.emptyList()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
