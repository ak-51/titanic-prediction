import { useState } from "react"
import axios from 'axios'
import Loading from "./Loading.jsx"
import Result from "./Result.jsx"

const Data = () => {
    const [Gender, setGender] = useState('Select')
    const [Age, setAge] = useState('')
    const [NSS, setNSS] = useState('')
    const [Parch, setParch] = useState('')
    const [Fare, setFare] = useState('')
    const [Clss, setClss] = useState('Select')
    const [Deck, setDeck] = useState('Select')
    const [Town, setTown] = useState('Select')
    const [Alone, setAlone] = useState('Select')
    const [Show, setShow] = useState(0)
    const [Percent, setPercent] = useState(null)
    const [Bg, setBg] = useState(null)
    
    const show = (e) => {
        e.preventDefault()
        // eslint-disable-next-line
        if(Gender == "Select"){
            alert("You have to select a gender")
        }
        // eslint-disable-next-line
        else if(Age != parseInt(Age)){
            alert("Age has to be an integer")
        }
        else if(parseInt(Age) < 0){
            alert("Age has to be more than or equal to 0")
        }
        // eslint-disable-next-line
        else if(NSS != parseInt(NSS)){
            alert("Number of Siblings/Spouse has to be an integer")
        }
        else if(parseInt(NSS) < 0){
            alert("Number of Siblings/Spouse has to be more than or equal to 0")
        }
        // eslint-disable-next-line
        else if(Parch != parseInt(Parch)){
            alert("Parch has to be an integer")
        }
        else if(parseInt(Parch) < 0){
            alert("Parch has to be more than or equal to 0")
        }
        // eslint-disable-next-line
        else if(Fare != parseFloat(Fare)){
            alert("Fare has to be an number")
        }
        else if(parseInt(Fare) <= 0){
            alert("Fare has to be more than 0")
        }
        // eslint-disable-next-line
        else if(Clss == "Select"){
            alert("You have to select a Class")
        }
        // eslint-disable-next-line
        else if(Deck == "Select"){
            alert("You have to select a Deck")
        }
        // eslint-disable-next-line
        else if(Town == "Select"){
            alert("You have to select a Town")
        }
        // eslint-disable-next-line
        else if(Alone == "Select"){
            alert("You have to select an option in 'Alone'")
        }
        else{
            setShow(1)
            var altgen
            // eslint-disable-next-line
            if(Gender == "Female"){
                altgen = "female"
            }
            else{
                altgen = "male"
            }
            var altalone
            // eslint-disable-next-line
            if(Alone == "Yes"){
                altalone = "y"
            }
            else{
                altalone = "n"
            }
            axios.post('/api', {
                Gender: altgen,
                Age: Age,
                NSS: NSS,
                Parch: Parch,
                Fare: Fare,
                Clss: Clss,
                Deck: Deck,
                Town: Town,
                Alone: altalone
            })
            .then((response) => {
                var x = response.data.percentage
                var y = (parseFloat(x.slice(0,6)))*100
                setPercent((parseFloat(x.slice(0,6)))*100)
                if(y >= 50){
                    setBg("#1BC31A")
                }
                else{
                    setBg("#EC2F09")
                }
                setShow(2)
            })
        }
    }

    return(
        <div>
        <div className="mainInp">
            <div className="formGrid">
                <form onSubmit={show}>
                    <div className="inputForm">
                        <div className="inputField">
                        <label>Gender</label>
                        </div>
                        <div className="inputField">
                        <select name="gender" className="dropdown" value={Gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                        
                        <div className="inputField">
                        <label>Age</label>
                        </div>
                        <div className="inputField">
                        <input type="text" className="textbox" value={Age} onChange={(e) => setAge(e.target.value)} required />
                        </div>

                        <div className="inputField">
                        <label>Number of Siblings/Spouse</label>
                        </div>
                        <div className="inputField">
                        <input type="text" className="textbox" value={NSS} onChange={(e) => setNSS(e.target.value)} required />
                        </div>
                        
                        <div className="inputField">
                        <label>Number of Parents/Children</label>
                        </div>
                        <div className="inputField">
                        <input type="text" className="textbox" value={Parch} onChange={(e) => setParch(e.target.value)} required />
                        </div>

                        <div className="inputField">
                        <label>Fare</label>
                        </div>
                        <div className="inputField">
                        <input type="text" className="textbox" value={Fare} onChange={(e) => setFare(e.target.value)} required />
                        </div>
                        
                        <div className="inputField">
                        <label>Class</label>
                        </div>
                        <div className="inputField">
                        <select name="clss" className="dropdown" value={Clss} onChange={(e) => setClss(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="First">First</option>
                            <option value="Second">Second</option>
                            <option value="Third">Third</option>
                        </select>
                        </div>
                        
                        <div className="inputField">
                        <label>Deck</label>
                        </div>
                        <div className="inputField">
                        <select name="deck" className="dropdown" value={Deck} onChange={(e) => setDeck(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="unknown">unknown</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                            <option value="F">F</option>
                        </select>
                        </div>
                        
                        <div className="inputField">
                        <label>Embark Town</label>
                        </div>
                        <div className="inputField">
                        <select name="embtown" className="dropdown" value={Town} onChange={(e) => setTown(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="Southampton">Southampton</option>
                            <option value="Cherbourg">Cherbourg</option>
                            <option value="Queenstown">Queenstown</option>
                        </select>
                        </div>

                        <div className="inputField">
                        <label>Alone</label>
                        </div>
                        <div className="inputField">
                        <select name="alone" className="dropdown" value={Alone} onChange={(e) => setAlone(e.target.value)}>
                            <option value="Select">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        </div>
                    </div>
                    <input type="submit" className="submitButton" />
                </form>
            </div>
        </div>
            {Show === 1 && (
                <Loading />
            )}
            {Show === 2 && (
                <Result percentage={Percent} Bg={Bg} />
            )}
        </div>
    )
}

export default Data