import "../styles/SidePromise.css"
import Input from "./Inputs";
import { useNavigate } from "react-router-dom"

const SidePromise = () => {

  const navigate = useNavigate()

  const handlePromise = () => {
    setTimeout(() => navigate("/promiseList"), 2000)
  } 

  return (
    <div className="sidePromise-container">
      <div className="Promise-select">
        <Input styleClass={"input-field"} type={"text"} label={"Promise Title"} />

        <label>Description</label>
        <textarea />

        <p>What best describes your promise list?</p>
      </div>

      <div className="promise-btn">
        <div className="btn-container">
          <input type="radio" id="birthday1" name="promise" className="btn-promise" value="Birthday 1" />
          <label htmlFor="birthday1" className="btn-promise">Birthday 1</label>
          
          <input type="radio" id="birthday2" name="promise" className="btn-promise" value="Birthday 2" />
          <label htmlFor="birthday2" className="btn-promise">Birthday 2</label>
          
          <input type="radio" id="birthday3" name="promise" className="btn-promise" value="Birthday 3" />
          <label htmlFor="birthday3" className="btn-promise">Birthday 3 Birthday 3   </label>

          <input type="radio" id="birthday4" name="promise" className="btn-promise" value="Birthday 4" />
          <label htmlFor="birthday4" className="btn-promise">Birthday 4</label>

          <input type="radio" id="birthday5" name="promise" className="btn-promise" value="Birthday 5" />
          <label htmlFor="birthday5" className="btn-promise">Birthday 5</label>

          <input type="radio" id="birthday6" name="promise" className="btn-promise" value="Birthday 6" />
          <label htmlFor="birthday6" className="btn-promise">Birthday 6</label>

          <input type="radio" id="birthday7" name="promise" className="btn-promise" value="Birthday 7" />
          <label htmlFor="birthday7" className="btn-promise">Birthday 7</label>

          <input type="radio" id="birthday8" name="promise" className="btn-promise" value="Birthday 8" />
          <label htmlFor="birthday8" className="btn-promise">Birthday 8</label>

          <input type="radio" id="birthday9" name="promise" className="btn-promise" value="Birthday 9" />
          <label htmlFor="birthday9" className="btn-promise">Birthday 9</label>

          <input type="radio" id="birthday10" name="promise" className="btn-promise" value="Birthday 10" />
          <label htmlFor="birthday10" className="btn-promise">Birthday 10</label>
        </div>
      </div>

      <button onClick={handlePromise} className="submit-btn">Submit</button>
    </div>
  )
}

export default SidePromise;
