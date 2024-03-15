import './App.css';
import { useState } from 'react';

function App() {

  const[formData , setFormData] = useState(
    {
      firstName:"",
      lastName:"",
      email:"",
      country:"",
      streetAddress:"",
      city:"",
      state:"",
      zip:"",
      comments:false,
      candidates:false,
      offers:false,
      pushNotifications:"",

    }
  )

  // console.log(formData);

  function changeHandler(event){
    
    setFormData( prev => {
      return{
        ...prev,
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }
    } )

  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
    <div className='flex justify-center mt-2'>
      <form onSubmit={submitHandler} className=' p-4  border-2 rounded-md w-1/2 shadow-lg'>

      <label htmlFor='firstName' className=''>First Name</label>
      <br/>
      <input
        type='text'
        placeholder='Daman'
        name='firstName'
        id='firstName' 
        onChange={changeHandler}
        value={formData.firstName}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />

      <label htmlFor='lastName'>Last Name</label>
      <br/>
      <input
        type='text'
        placeholder='Sidhu'
        name='lastName'
        id='lastName' 
        onChange={changeHandler}
        value={formData.lastName}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />

      <label htmlFor='email'>Email address</label>
      <br/>
      <input
        type='email'
        placeholder='deepddaman46@gmail.com'
        name='email'
        id='email' 
        onChange={changeHandler}
        value={formData.email}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />
      
      <label htmlFor='country'>Country</label>
      <br/>
      <select
        name='country'
        id='country'
        value={formData.country}
        onChange={changeHandler}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      >
        <option value="select">select</option>
        <option value="india">india</option>
        <option value="canada">canada</option>
        <option value="mexico">mexico</option>
      </select>

      <br />

      <label htmlFor='streetAddress'>Street address</label>
      <br/>
      <input
        type='streetAddress'
        placeholder='1058 sec 37'
        name='streetAddress'
        id='streetAddress' 
        onChange={changeHandler}
        value={formData.streetAddress}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />

      <label htmlFor='city'>City</label>
      <br/>
      <input
        type='city'
        placeholder='Chandigarh'
        name='city'
        id='city' 
        onChange={changeHandler}
        value={formData.city}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />

      <label htmlFor='state'>State/Province</label>
      <br/>
      <input
        type='state'
        placeholder='Punjab'
        name='state'
        id='state' 
        onChange={changeHandler}
        value={formData.state}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />

      <label htmlFor='zip'>ZIP/Postal</label>
      <br/>
      <input
        type='zip'
        placeholder='160036'
        name='zip'
        id='zip' 
        onChange={changeHandler}
        value={formData.zip}
        className='border-2 rounded-md hover:border-[#4278C0] w-full '
      />

      <br />
      <br />

      <fieldset>
        <legend>By Email</legend>

          <br />
          <div className='flex items-start gap-3'>
            <input 
              type='checkbox'
              name='comments'
              id='comments'
              onChange={changeHandler}
              checked={formData.checked}
              className='mt-1'
            />
            <div>
                <label htmlFor='comments'>Comments</label>
                <p className='text-[#94959E] text-sm'>Get notified when someones posts a comment on a posting.</p>
            </div>

          </div>
          
          <div className='flex items-start gap-3'>

            <input 
              type='checkbox'
              name='candidates'
              id='candidates'
              onChange={changeHandler}
              checked={formData.candidates}
              className='mt-1'
            />
            <div>
                <label htmlFor='candidates'>Candidates</label>
                <p className='text-[#94959E] text-sm'>Get notified when a candidate applies for a job.</p>
            </div>

          </div>

          <div className='flex items-start gap-3'>

            <input 
              type='checkbox'
              name='offers'
              id='offers'
              onChange={changeHandler}
              checked={formData.offers}
              className='mt-1'
            />
            <div className='leading-5'>
                <label htmlFor='offers'>Offers</label>
                <p className='text-[#94959E] text-sm'>Get notified when a candidate accepts or rejects an offer.</p>
            </div>

          </div>

      </fieldset>

      <br/>
      <fieldset className=''>
        <legend>Push Notifications</legend>
        <p className='text-[#94959E] text-sm'>These are delivered via SMS to your mobile phone.</p>

        <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
          className='mr-3'
        />

        <label htmlFor="pushEverything">Everything</label>

        <br/>
        <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as email"
          onChange={changeHandler}
          className='mr-3'
        />

        <label htmlFor="pushEmail">Same as email</label>

        <br/>
        <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notifications"
          onChange={changeHandler}
          className='mr-3'
        />

        <label htmlFor="pushNothing">No Push Notifications</label>

      </fieldset>

      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4 mt-2">
        Save
      </button>

      </form>
    </div>
  );
}

export default App;
