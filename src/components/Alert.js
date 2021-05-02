export const Alert = ({ alert }) => {

  if (!alert) return null

  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-desmissible`}>
      <strong>Внимание!</strong>
      {alert.text}
      <button type="button" className="close" data-dismiss="alert" aria-label="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}