import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Create() {
    

	// Making usestate for setting and
	// fetching a value in jsx
	const [layout, setlayout] = useState('');
	const [name, setname] = useState('');
	const [capacity, setcapacity] = useState('');
	const [status, setstatus] = useState('');
	const [image, setimage] = useState('');


	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) =>{
		e.preventDefault(); // Prevent reload

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0,8) // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = layout, b= name, c= capacity, d= status,f= image
		array.push({id:uni,Layout:a,Name:b,Capacity:c, Status:d, Image:f})


	// Redirecting to home page after creation done
	history('/home')
		
	}

return (

	<div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-white border-bottom" style={{margin:'0rem', padding:'1rem',fontWeight:'bold'}}> Create Table
    </nav>
    
         

<Form className="d-grid gap-4" style={{marginTop:'5rem',margin:'5rem'}}>

<Form.Group className="d-grid gap-2"  controlId="formBasicSelect">
<label style={{textAlign:'left'}}>Layout:</label>
        <Form.Select style={{width:'30px'}}
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

{/* Fetching a value from input textfirld
in a setname using usestate*/}
<Form.Group  className="d-grid gap-2" controlId="formBasicName">
        <label style={{textAlign:'left'}}>Name:</label>
	<Form.Control onChange={e => setname(e.target.value)}
				type="text"
				placeholder="Enter Name" required/>
</Form.Group>

	{/* Fetching a value from input textfirld in
	a setage using usestate*/}
<Form.Group  className="d-grid gap-2" controlId="formBasicNumber">
        <label style={{textAlign:'left'}}>Capacity:</label>
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

	{/* handing a onclick event in button for
	firing a function */}
    <div style={{textAlign:'left'}}className="">
<Button  className="small-btn"
onClick={e => handelSubmit(e)}
	variant="dark" type="submit"  size="lg">
	Create Table
</Button>

{/* Redirecting back to home page */}

	<Button style={{marginLeft:'1rem'}}className="small-btn" variant="danger" size="lg"
onClick={() => window.location.reload(false)}>Cancel{e => handelSubmit(e)}
	</Button>

</div>

</Form>
	</div>
)
}

export default Create
