import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }



  render() {
    let child_count = Children.count(this.props.children) + 5
    let paddingLeft = 100/child_count
    let paddingLeft_new = paddingLeft+""+"%"
    const lists = Children.map(this.props.children, child => (  
      <li style={{float:'left', paddingLeft: paddingLeft_new}}>{child}</li>
    ));

    return (
    <div className={styles.overall}>    
      <div className={styles.footer_wrap}>  
      <ul style={{listStyleType: 'none', padding:0}}>
         {lists}
      </ul>
      </div>   
    </div>
    )
  }
}
