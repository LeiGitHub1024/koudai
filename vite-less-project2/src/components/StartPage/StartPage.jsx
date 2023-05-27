import React, { useEffect, useState } from 'react'
import './StartPage.less'
import startPage from '../../assets/01启动页.png'
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
    <img style={{visibility:visible?'visible':'hidden'}} id="shrink" className="start-page" src={startPage}>
    
    </img>
  )
}

export default StartPage;