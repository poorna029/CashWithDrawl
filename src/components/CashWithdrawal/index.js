// Write your code here
import {useState} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

const CashWithdrawal = props => {
  const {denominationsList} = props

  const [count, setCount] = useState(2000)

  const fun = e => {
    const x = count - e

    setCount(x)
  }

  return (
    <div className="top">
      <div className="main0">
        <div className="main">
          <div className="main1">
            <div className="p">
              <p className="pp">P</p>
            </div>
            <h1 className="name">Poorna Chandra</h1>
          </div>

          <div className="main2">
            <div className="main2Inn">
              <p className="bal">Your Balance</p>
              <div>
                <p className="inn1">{count}</p>
                <p className="inn2">In Rupees</p>
              </div>
            </div>
          </div>

          <p className="c">Withdraw</p>

          <p className="z">CHOOSE SUM (IN RUPEES)</p>
          <div className="ul">
            <ul className="inne">
              {denominationsList.map(p => (
                <DenominationItem val={p} val1={fun} key={p.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CashWithdrawal
