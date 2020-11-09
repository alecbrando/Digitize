import React from 'react'
import { useHistory } from 'react-router-dom'
import SearchBar from "material-ui-search-bar";
import styles from '../../assets/scss/header.module.scss'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
export default function Header() {
  const history = useHistory()

  return (
    <div className={styles.header_container}>
      <div>
        <h3>DIGITIZE</h3>
      </div>

      <div className={styles.header_right_links}>
        <Button variant="outlined">Discover</Button>
        <Button variant="outlined"onClick={() => history.push('/login')}>Login</Button>
        <Button variant="outlined">Sign Up</Button>
        <SearchBar

          // value={this.state.value}
          // onChange={(newValue) => this.setState({ value: newValue })}
          // onRequestSearch={}
        />
      </div>
    </div>
  )
}
