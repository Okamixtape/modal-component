// REACT
import React, { useState, useEffect } from 'react'

// MEDIA
import validIcon from './valid.png'
import errorIcon from './error.png'

// CSS
import './modal.css'

/**
 * React component
 * @param { {modal: String|object, closeIcon: Boolean, button: Boolean, allowCustomization: Boolean, buttonCallback: Function } }
 * @param modal -  
To use pre-created modals, use strings with the words "error" or "valid". To use a custom modal, pass an object that has the following properties: 'title', 'icon', 'altText', 'content', 'cta' and put the props allowCustomization to true.
 * @param closeIcon - A boolean, the cross icon will appear or not depending on true or false.
 * @param button - A boolean, the button will appear or not depending on true or false.
 * @param allowCustomization - A boolean, if set to true, you can pass your own object in the modalType props.
 * @param buttonCallback - The function that is called when you press the button & cross icon.
 * @returns { React.ReactElement } A Modal component
 */
const Modal = ({
  modal,
  closeIcon,
  button,
  allowCustomization,
  buttonCallback,
}) => {
  const [shown, setShown] = useState(true)

  // Defaults modal that the user can pick from
  const modalOptions = [
    {
      title: 'valid',
      icon: validIcon,
      altText: 'valid image',
      content: 'Your request has been sent.',
      cta: 'Close',
    },
    {
      title: 'error',
      icon: errorIcon,
      altText: 'error image',
      content: 'An error has occured.',
      cta: 'Close',
    },
  ]

  // WHEN THE MODAL IS CLOSED, THE STATE IS SET TO FALSE AND THE CALLBACK IS CALLED
  const handleShown = () => {
    setShown(false)
    if (buttonCallback) {
      buttonCallback()
    }
  }

  // WHEN THE ESCAPE KEY IS PRESSED, THE MODAL IS CLOSED
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleShown()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })

  let option

  if (allowCustomization) {
    option = modal
  } else {
    let selectedModalOption = modalOptions.filter((i) => i.title === modal)
    option = selectedModalOption[0]
  }

  if (shown) {
    return (
      <modal open={true} className="modal__bg" id="myModal">
        <div className="modal" id="modal">
          {closeIcon ? (
            <button onClick={() => handleShown()} className="modal__close-btn">
              ✖
            </button>
          ) : null}
          <img className="modal__img" src={option.icon} alt={option.altText} />
          <p className="modal__body">{option.content}</p>
          {button ? (
            <button
              onClick={() => handleShown()}
              className={'modal__cta modal__cta--' + option.title}
            >
              {option.cta}
            </button>
          ) : null}
        </div>
      </modal>
    )
  } else {
    return <modal open={false}></modal>
  }
}

export default Modal
