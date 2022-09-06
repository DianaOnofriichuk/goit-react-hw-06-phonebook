import './Filter.css'
import { useDispatch } from 'react-redux'
import actions from '../../Redax/actions'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    const value = evt.target.value
    dispatch(actions.changeFilter(value))
  }

  return (
    <div>
      <p className="text">Find contacts by name</p>
      <input className="input" type="text" onChange={handleChange} />
    </div>
  )
}

export default Filter
