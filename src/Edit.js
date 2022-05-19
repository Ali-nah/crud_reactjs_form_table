import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Edit() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [layout, setlayout] = useState('');
	const [name, setname] = useState('');
	const [capacity, setcapacity] = useState('');
	const [status, setstatus] = useState('');
	const [image, setimage] = useState('');
	const[id,setid] = useState('');

	// used for navigation with logic in javascript
	let history = useNavigate()
	
	// getting an index of an entry with an id
	var index = array.map(function(e) { return e.id; }).indexOf(id);

	// function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) =>{
		e.preventDefault(); // preventing from reload
		
		let a = array[index] // getting an index of an array

		// putting the value from the input textfield and
		// replacing it from existing for updation
		a.Layout = layout
		a.Name = name
		a.Capacity = capacity
		a.Status = status
		a.Image = image

		// redirecting to main page
		history('/home')
	}


	// Useeffect take care that page will be rendered only once
	useEffect(() => {
		setname(localStorage.getItem('Name'))
		setlayout(localStorage.getItem('Layout'))
		setid(localStorage.getItem('id'))
	}, [])
	
return (
	<div>
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

			{/* setting a name from the input textfiled */}
	
			<Form.Group className="d-grid gap-2"  controlId="formBasicSelect">
        <Form.Select
          as="select"
          value={layout}
          onChange={e => {
            console.log("e.target.value", e.target.value);
            setlayout(e.target.value);
          }}
        >
          <option>Layout</option>
          <option>Simple</option>
          <option >Complex</option>
        </Form.Select>
      </Form.Group>
	
	
	
			{/* setting a age from the input textfiled */}
			<Form.Group  className="d-grid gap-2" controlId="formBasicName">
	<Form.Control onChange={e => setname(e.target.value)}
				type="text"
				placeholder="Enter Name" required/>
</Form.Group>

			

<Form.Group  className="d-grid gap-2" controlId="formBasicNumber">
	<Form.Control onChange={e => setcapacity(e.target.value)}
				type="number"
				placeholder="Capacity" required/>
</Form.Group>



<Form.Group  className="d-grid gap-2" controlId="formBasicCheckbox">
        <label style={{textAlign:'left'}}>Status:</label>
		<Form.Check style={{textAlign:'left'}} type="checkbox"onChange={e => setstatus(e.target.value)}>
		</Form.Check>
	
</Form.Group>


<Form.Group onChange={e => setimage(e.target.value)}  
for="FormControlFile1" style={{textAlign:'left'}}>Image:
    <input style={{textAlign:'left', marginLeft:'0.5rem'}} type="file" class="form-control-file" id="FormControlFile1"/>
</Form.Group>




			{/* Hadinling an onclick event running an edit logic */}
			<Button
			onClick={e => handelSubmit(e)}
			variant="primary" type="submit" size="lg">
				Update
			</Button>

			{/* Redirecting to main page after editing */}
			<Link className="d-grid gap-2" to='/'>
			<Button variant="warning" size="lg">Home</Button>
			</Link>
		</Form>
	</div>
)
}

export default Edit
