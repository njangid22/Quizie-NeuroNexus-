import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <div className="app-component-container1">
        <span className="app-component-text">{props.text1}</span>
        <span className="app-component-text1">
          <span>98/100</span>
          <br></br>
        </span>
      </div>
      <h1 className="app-component-text4">{props.heading}</h1>
      <span className="app-component-text5">{props.text}</span>
      <div className="app-component-container2">
        <div className="app-component-profile">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="app-component-image"
          />
          <span className="app-component-text6">{props.text3}</span>
        </div>
        <span className="app-component-text7">{props.text2}</span>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  text2: 'Read More ->',
  image_alt: 'profile',
  text3: 'Jane Doe',
  text1: '22bcb7101',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  heading: 'Lorem ipsum dolor sit amet',
  image_src:
    'https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&ixlib=rb-1.2.1&h=1200',
}

AppComponent.propTypes = {
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default AppComponent
