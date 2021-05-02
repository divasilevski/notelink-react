import { CSSTransition } from 'react-transition-group'
import { useContext, useEffect } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Alert = () => {
  const { alert, hide, show } = useContext(AlertContext)

  useEffect(() => {
    const timeout = setTimeout(hide, 4000)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line
  }, [show])

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{ enter: 500, exit: 350 }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-desmissible`}>
        <strong>Внимание!&nbsp;</strong>
        {alert.text}
        <button
          type="button"
          className="close"
          aria-label="close"
          onClick={hide}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>

  )
}