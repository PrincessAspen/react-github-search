import {useState} from 'react'

//Construct the form
const FormField = ({placeResult}) => {
    const [userName, setUserName] = useState({
        theBoi: ''
    })


    //Make the form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        if(!userName.theBoi) {
            alert('No user entered');
            return
        }

        placeResult(userName.theBoi);

        setUserName({
            theBoi: ''
        })
    }


    //Standard handleChange
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserName((currentState) => ({
            ...currentState,
            [name]: value,
        }));
    }

    //Return the html so the app can use it
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input 
                type="text" 
                name="theBoi" 
                onChange = {handleChange} 
                value={userName.theBoi}
                placeholder="Enter username"/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
};

export default FormField;