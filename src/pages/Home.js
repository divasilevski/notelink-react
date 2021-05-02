import { Fragment } from "react"
import { Form } from "../components/Form"
import { Notes } from "../components/Notes"

export const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, index) => ({ id: index, title: 'Note ' + index }))

  return (
    <Fragment>
      <Form />

      <hr />

      <Notes notes={notes}/>
    </Fragment>
  )
}