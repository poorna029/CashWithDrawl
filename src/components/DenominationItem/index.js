// Write your code here
import './index.css'

const DenominationItem = props => {
  const {val, val1} = props
  const {id, value} = val
  const func = e => {
    // console.log(e)
    val1(value)
  }
  return (
    <li className="li">
      <button className="button" onClick={func}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
