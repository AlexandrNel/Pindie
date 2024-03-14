'use client'
import { useState, useEffect } from 'react'
import Styles from './Promo.module.css'

export const Promo = () => {
const [codeIsVisible, setCodeIsVisible] = useState(false)
useEffect(() =>{
  let timeout
  if (codeIsVisible){
    timeout = setTimeout(() => {
      setCodeIsVisible(false)
    }, 5000)
  }
  return () => {
    clearTimeout(timeout)
  }
}, [codeIsVisible])
function handleButtonClick(){
  setCodeIsVisible(true)
  // setTimeout (() =>  setCodeIsVisible(false), 2000)
}
    return (
        <section className={Styles.promo}>
      <div>
        <h2 className={Styles.title}>Твой промо-код</h2>
        <p className={Styles.description}>Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!</p>
        <button className={`button ${Styles.button}`} onClick={handleButtonClick}>{codeIsVisible? <span className={Styles["promo-code"]}>WEBTEENS10</span>: 'Получить код'}</button>
      </div>
      <img src="/images/promo-illustration.svg" alt="Собака" className={Styles.image}/>
    </section>
    )
}