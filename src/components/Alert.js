import { useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  if (!alert.visible) return null

  return (
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
  )
}