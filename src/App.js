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

  console.log(formData);

  function changeHandler(event){
    
    setFormData( prev => {
      return{
        ...prev,
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }
    } )

  }

  return (
    <div>
      <form>

      <label htmlFor='firstName'>First Name</label>
      <br/>
      <input
        type='text'
        placeholder='Daman'
        name='firstName'
        id='firstName' 
        onChange={changeHandler}
        value={formData.firstName}
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
      />

      <br />
      
      <label htmlFor='country'>Country</label>
      <br/>
      <select
        name='country'
        id='country'
        value={formData.country}
        onChange={changeHandler}
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
      />

      <br />

      <fieldset>
        <legend>By Email</legend>

          <input 
            type='checkbox'
            name='comments'
            id='comments'
            onChange={changeHandler}
            checked={formData.checked}
          />
          <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
          </div>

          <input 
            type='checkbox'
            name='candidates'
            id='candidates'
            onChange={changeHandler}
            checked={formData.candidates}
          />
          <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
          </div>

          <input 
            type='checkbox'
            name='offers'
            id='offers'
            onChange={changeHandler}
            checked={formData.offers}
          />
          <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
          </div>

      </fieldset>

      <br/>
      <br/>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          onChange={changeHandler}
        />

        <label htmlFor="pushEverything">Everything</label>

        <br/>
        <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as email"
          onChange={changeHandler}
        />

        <label htmlFor="pushEmail">Same as email</label>

        <br/>
        <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notifications"
          onChange={changeHandler}
        />

        <label htmlFor="pushNothing">No Push Notifications</label>

      </fieldset>

      <button>
        Save
      </button>

      </form>
    </div>
  );
}

export default App;
