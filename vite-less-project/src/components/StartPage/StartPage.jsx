import React, { useEffect, useState } from 'react'
import './StartPage.less'
import startImg from '../../images/start.png'
function StartPage(props) {
  // const shrinkDiv = document.getElementById('shrink')
  // shrinkDiv.addEventListener('click', () => {
  //   shrinkDiv.classList.add('shrink');
  // });
  const { visible,setVisible } = props
  useEffect(() => {
    const shrinkDiv = document.getElementById('shrink')
    shrinkDiv.addEventListener('click', () => {
      shrinkDiv.classList.add('shrink');
      setTimeout(() => {
        setVisible(false)
      }, 1000)
    });

  }, [])
  return (
    <img style={{visibility:visible?'visible':'hidden'}} id="shrink" className="start-page" src={startImg}>
    
    </img>
  )
}

export default StartPage;