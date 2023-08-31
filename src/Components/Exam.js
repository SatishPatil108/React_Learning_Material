import React, { Component } from 'react'

class Exam extends Component {
  render() {
    return (
      <div>
        <form>
            <div>
                <label>States</label>
                <select>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Uttar Pradesh</option>
                </select>

                <select>
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>kolhpur</option>
                </select>
            </div>

            
        </form>
      </div>
    )
  }
}

export default Exam
