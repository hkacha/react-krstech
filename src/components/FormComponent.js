import React, { useState, useEffect } from 'react'

import { Form, Button } from 'react-bootstrap';

const FormComponent = () => {

    const [id, setId] = useState(0)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [range, setRange] = useState(null)
    const [valid, setValid] = useState(null)

    // Errors
    const [errorTitle, setTitleError] = useState('')
    const [errorEmail, setEmailError] = useState('')
    const [errorRange, setRangeError] = useState(null)
    const [errorValid, setValidError] = useState(null)

    const handleChange = (e, field) => {
        const errorMsg = "This field is required"
        switch (field) {
            case 'title':
                e.target.value !== "" ? 
                setTitle(e.target.value)
                :
                setTitleError(errorMsg)
                break;
            
            case 'description':
                setDescription(e.target.value)
                break;

            case 'email':
                e.target.value !== "" ? 
                setEmail(e.target.value)
                :
                setEmailError(errorMsg)
                break;
            
            case 'range':
                e.target.value !== "" ? 
                setRange(e.target.value)
                :
                setRangeError(errorMsg)
                break;

            case 'valid':
                e.target.value !== "select" ? 
                setValid(e.target.value)
                :
                setValidError("Please select any one value")
                break;

            default:
                break;
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        let allData = JSON.parse(localStorage.getItem('allData'));
        setId(allData.length+1)
        const finalData = {id, title, description, email, range, valid}
        allData.push(finalData)
        localStorage.setItem("allData", JSON.stringify(allData));
    }

    useEffect(() => {
        const allData = localStorage.getItem('allData');
        if(!allData){
            localStorage.setItem('allData', JSON.stringify([]))
        }
    },[])

    return (
        <Form onSubmit={submitForm} method="POST">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" onChange={(e) => handleChange(e, 'title')} />
                <Form.Text className="text-muted">{errorTitle}</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" onChange={(e) => handleChange(e, 'description')} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={(e) => handleChange(e, 'email')} />
                <Form.Text className="text-muted">{errorEmail}</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Range</Form.Label>
                <Form.Control type="number" max="100" min="1" name="range" onChange={(e) => handleChange(e, 'number')} />
                <Form.Text className="text-muted">{errorRange}</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Valid</Form.Label>
                <Form.Control as="select" name="valid" onChange={(e) => handleChange(e, 'valid')}>
                    <option value="select">Select</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </Form.Control>
                <Form.Text className="text-muted">{errorValid}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default FormComponent
