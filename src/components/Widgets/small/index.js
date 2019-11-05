import React from 'react'
import './styles.css'

export default function WidgetSmall(props) {
  return (
    <article className={`widget-small ${props.color}`}>
      {props.backgroundSource && (
        <div
          className="background-image"
          style={{ backgroundImage: `url(${props.backgroundSource})` }}
        ></div>
      )}
      <header>
        <div className="title">{props.title}</div>
      </header>
      <div className="body">
        <span className="body-left">{props.bodyLeft}</span>
        <span className="body-right">{props.bodyRight}</span>
      </div>
      <footer>
        <span className="footer">{props.footer}</span>
      </footer>
    </article>
  )
}
