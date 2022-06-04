import React, {useState} from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


export default function Form(props){
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
        }
    )
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [car, setCar] = useState("")

    const mercedes = [
        "C",
        "G",
    ]
    const tesla = [
        "Model S",
        "Model 3",
    ]
    const bmw = [
        "i4",
        "X6"
    ]
    const volkswagen = [
        "Arteon",
        "T-Cross"
    ]
    const audi = [
        "A7",
        "Q8"
    ]

    
    let type = null
    let options = null

    
    if(car === "Mercedes-Benz"){
        type = mercedes
    }else if(car === "Tesla"){
        type = tesla
    }else if (car === "BMW"){
        type = bmw
    }else if(car === "Volkswagen"){
        type = volkswagen
    }else if(car === "Audi"){
        type = audi
    }

    
    if(type) {
        options = type.map((id) => <option key={id}>{id}</option>)
    }
    
    const handleSelectChange = event => {
        setCar(event.target.value)
    }
    const handleStartDate = date => {
        setStartDate(date)
    }
    const handleEndDate = date => {
        setEndDate(date)
    }
    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div className="container">
            <nav className="navbar">
                <h1>RENT-A-CAR</h1>
            </nav>
            <form className="form" onSubmit={props.handleFormSubmit}>
                <div className="form--row">
                    <div className="car--form">
                    <label>Brand
                            <select onChange={handleSelectChange}> 
                                <option>Choose...</option>
                                <option>Mercedes-Benz</option>
                                <option>Tesla</option>
                                <option>BMW</option>
                                <option>Volkswagen</option>
                                <option>Audi</option>
                            </select>
                        </label>
                        <label>Model
                            <select>{options}</select>
                        </label>
                        <label>Start date
                        <DatePicker 
                            selected={startDate}
                            onChange={handleStartDate}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            minDate={new Date()}
                            dateFormat='dd/MM/yyyy'
                            placeholderText='Start date'
                            required
                        />
                    </label>
                    <label>End date
                        <DatePicker 
                            selected={endDate}
                            onChange={handleEndDate}
                            selectsEnd
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat='dd/MM/yyyy'
                            placeholderText='End date'
                            required
                        />
                    </label>
                    </div>
                    <div className="rent--form">
                    <label>First name
                        <input 
                            type="text" 
                            name="firstName"
                            placeholder='First name' 
                            onChange={handleInputChange}
                            required
                            />
                    </label>
                    <label>Last name
                        <input 
                            type="text"
                            name="lastName"
                            placeholder='Last name'
                            onChange={handleInputChange}
                            required/>
                    </label>
                    <label>Email
                        <input 
                            type="email"
                            name="email"
                            placeholder='Email' 
                            onChange={handleInputChange}
                            required/>
                    </label>
                    <label>Phone
                        <input 
                            type="text"
                            name="phone"
                            placeholder='Phone' 
                            onChange={handleInputChange}
                            required/>
                    </label>
                    </div>
                </div>
                <div className="rent--button">
                    <input 
                        className="submit" 
                        type="submit" 
                        value="RENT"
                    />
                </div>
            </form>
        </div>
    )
}