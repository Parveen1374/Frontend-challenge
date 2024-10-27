import React, {useState} from 'react'

const App = () =>{
  const [name , setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submittedData, setSubmittedData] = useState([])
  const [successMessage, setSuccessMessage] = useState('')

  const onSubmitForm = (e)=>{
    e.preventDefault()
    const formData = {
      name,
      email,
      message
    }
    setSubmittedData([...submittedData, formData])
    setSuccessMessage('Form Submitted Successfully')
    setName('')
    setEmail('')
    setMessage('')

    setTimeout(()=>{
      setSuccessMessage('')
    },3000)
  }

  const onChangeName = (event) => setName(event.target.value)
  const onChangeEmail = (event) => setEmail(event.target.value)
  const onChangeMessage = (event) => setMessage(event.target.value)

  return(
    <div className="container d-flex align-items-center vh-100">
      <div className='row w-100'>
        <div className="col-md-6">
          <form onSubmit={onSubmitForm} className='border rounded p-5 shadow-lg bg-light'>
            <h3 className='mb-2 text-center'>Form</h3>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name :</label>
              <input id='name' type='text' name='name' onChange={onChangeName} value={name} className='form-control' placeholder='Enter Name' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='email'>E-mail :</label>
              <input id='email' type='text' name='email' onChange={onChangeEmail} value={email} className='form-control' placeholder='Enter E-mail' required />
            </div>
            <div className='mb-3'>
              <label htmlFor='message'>Message :</label>
              <textarea id='message' name='message' onChange={onChangeMessage} value={message} className='form-control' placeholder='Enter Message' rows="3" required />
            </div>
            <div className='d-flex justify-content-end'>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </div> 
            {successMessage && <p className='alert alert-success mt-3 text-center'>{successMessage}</p>}
          </form>
        </div>
        <div className='col-md-6'>
          {submittedData.length > 0 && (
            <div className="border rounded p-4 shadow-lg bg-light">
              <h3 className="mb-2 text-center">Submitted Data</h3>
              <ul className='list-group'>
                {submittedData.map((data, index)=>(
                  <li key={index} className="list-group-item">
                    <h3>{data.name}</h3>
                    <p>{data.email}</p>
                    <p>{data.message}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App