import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.scss'

interface Props {
  title: string
  content: JSX.Element
  action: JSX.Element
  ref: React.Ref<unknown>
}

const Modal: React.FC<Props> = forwardRef(({ title, content, action }, ref) => {
  const [display, setDisplay] = useState<boolean>(false)

  useImperativeHandle(ref, (): {
    openModal: () => void
    closeModal: () => void
  } => ({ openModal, closeModal }))

  const openModal = (): void => {
    setDisplay(true)
  }

  const closeModal = (): void => {
    setDisplay(false)
  }

  return (
    <>
      {display &&
        createPortal(
          <div className={styles.modalWrapper}>
            <div onClick={closeModal} className={styles.modalBackdrop} />
            <div className={styles.modalBox}>
              <span onClick={closeModal} className={styles.closeButton}>
                &#10005;
              </span>
              <h3 className={styles.modalTitle}>{title}</h3>
              {content}
              {action}
            </div>
          </div>,
          document.querySelector('#modal-root') as HTMLElement
        )}
    </>
  )
})

export default Modal