import React, { useState } from 'react'

const First_Quater2 = ({ final }) => {
    const divStyle = {
        width: "50%"
    }
    const [btns, setbtns] = useState(false)

    const [finalPlayer, setfinalPlayer] = useState({
        player1: "", player2: "", player3: "", player4: "", player5: "", position1: "", position2: "", position3: "", position4: "", position5: ""
    })
    const [index, setindex] = useState(0)
    const [index1, setindex1] = useState(0)
    const [index2, setindex2] = useState(0)
    const [index3, setindex3] = useState(0)
    const [index4, setindex4] = useState(0)
    const styles = {
        width: "100%",
        height: "48px",
        fontWeight: "400",
        lineHeight: "1.1876em",
        fontSize: "1rem",
        letterSpacing: "0.00938em",
        border: "none",
        background: "#fff",
        borderBottom: "1px gray solid",
        borderRight: "1px gray solid"
    }

    // debugger
    let error1 = "", error2 = "", error3 = "", error4 = "", error5 = "", error6 = "", error7 = "", error8 = "", error9 = "", error10 = ""
    let condition1 = error6 || error7 || error8 || error9 || error10
    let condition = error1 || error2 || error3 || error4 || error5
    if (finalPlayer.player1) {

        error1 = finalPlayer.player1 == finalPlayer.player2 ||
            finalPlayer.player1 == finalPlayer.player3 ||
            finalPlayer.player1 == finalPlayer.player4 ||
            finalPlayer.player1 == finalPlayer.player5
    }
    if (finalPlayer.player2) {
        error2 = finalPlayer.player2 == finalPlayer.player1 ||
            finalPlayer.player2 == finalPlayer.player3 ||
            finalPlayer.player2 == finalPlayer.player4 ||
            finalPlayer.player2 == finalPlayer.player5
    }
    if (finalPlayer.player3) {
        error3 = finalPlayer.player3 == finalPlayer.player2 ||
            finalPlayer.player3 == finalPlayer.player1 ||
            finalPlayer.player3 == finalPlayer.player4 ||
            finalPlayer.player3 == finalPlayer.player5
    }
    if (finalPlayer.player4) {
        error4 = finalPlayer.player4 == finalPlayer.player2 ||
            finalPlayer.player4 == finalPlayer.player3 ||
            finalPlayer.player4 == finalPlayer.player1 ||
            finalPlayer.player4 == finalPlayer.player5
    }

    if (finalPlayer.player5) {
        error5 = finalPlayer.player5 == finalPlayer.player2 ||
            finalPlayer.player5 == finalPlayer.player3 ||
            finalPlayer.player5 == finalPlayer.player4 ||
            finalPlayer.player5 == finalPlayer.player1
    }

    if (finalPlayer.position1) {
        error6 = finalPlayer.position1 == finalPlayer.position2 ||
            finalPlayer.position1 == finalPlayer.position3 ||
            finalPlayer.position1 == finalPlayer.position4 ||
            finalPlayer.position1 == finalPlayer.position5
    }
    if (finalPlayer.position2) {
        error7 = finalPlayer.position2 == finalPlayer.position1 ||
            finalPlayer.position2 == finalPlayer.position3 ||
            finalPlayer.position2 == finalPlayer.position4 ||
            finalPlayer.position2 == finalPlayer.position5
    }
    if (finalPlayer.position3) {
        error8 = finalPlayer.position3 == finalPlayer.position2 ||
            finalPlayer.position3 == finalPlayer.position1 ||
            finalPlayer.position3 == finalPlayer.position4 ||
            finalPlayer.position3 == finalPlayer.position5
    }
    if (finalPlayer.position4) {
        error9 = finalPlayer.position4 == finalPlayer.position2 ||
            finalPlayer.position4 == finalPlayer.position3 ||
            finalPlayer.position4 == finalPlayer.position1 ||
            finalPlayer.position4 == finalPlayer.position5
    }
    if (finalPlayer.position5) {
        error10 = finalPlayer.position5 == finalPlayer.position2 ||
            finalPlayer.position5 == finalPlayer.position3 ||
            finalPlayer.position5 == finalPlayer.position4 ||
            finalPlayer.position5 == finalPlayer.position1
    }

    const handleNameChange1 = (e) => {
        console.log(e.target.value)
        const filter = final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname) && e.target.value.includes(i.id)) })
        console.log("filter ", filter);
        setindex(filter)
        setfinalPlayer((old) => ({ ...old, [e.target.name]: e.target.value }))

    }
    const handleNameChange2 = (e) => {
        console.log(e.target.value)
        const filter = final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname) && e.target.value.includes(i.id)) })
        console.log("filter ", filter);
        setindex1(filter)
        setfinalPlayer((old) => ({ ...old, [e.target.name]: e.target.value }))

    }
    const handleNameChange3 = (e) => {
        console.log(e.target.value)
        const filter = final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname) && e.target.value.includes(i.id)) })
        console.log("filter ", filter);
        setindex2(filter)
        setfinalPlayer((old) => ({ ...old, [e.target.name]: e.target.value }))

    }
    const handleNameChange4 = (e) => {
        console.log(e.target.value)
        const filter = final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname) && e.target.value.includes(i.id)) })
        console.log("filter ", filter);
        setindex3(filter)
        setfinalPlayer((old) => ({ ...old, [e.target.name]: e.target.value }))
    }

    const handleNameChange5 = (e) => {
        console.log(e.target.value)
        const filter = final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname) && e.target.value.includes(i.id)) })
        console.log("filter ", filter);
        setindex4(filter)
        setfinalPlayer((old) => ({ ...old, [e.target.name]: e.target.value }))
    }
    const handlePositionChange = (e) => {
        setfinalPlayer((old) => ({ ...old, [e.target.name]: e.target.value }))
    }

    const handleNext = () => {
        if (!condition1 && !condition) {
            alert("Enjoy Playing")
        }
    }
    // if (!condition1 && !condition ) {
    //     setbtns(false)
    // }

    return (<>
        <div className="Form">
            <div style={divStyle}>
                <select name="player1" className={error1 ? "selError" : "sel"} onChange={handleNameChange1}>
                    <option value="default" disabled hidden selected>Select Player</option>
                    {final.length > 0 ? final.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}

                </select>
                <select name="player2" className={error2 ? "selError" : "sel"} onChange={handleNameChange2}>
                    <option value="default" disabled hidden selected>Select Player</option>
                    {final.length > 0 ? final.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                </select>
                <select name="player3" className={error3 ? "selError" : "sel"} onChange={handleNameChange3}>
                    <option value="default" disabled hidden selected>Select Player</option>
                    {final.length > 0 ? final.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                </select>
                <select name="player4" className={error4 ? "selError" : "sel"} onChange={handleNameChange4}>
                    <option value="default" disabled hidden selected>Select Player</option>
                    {final.length > 0 ? final.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                </select>
                <select name="player5" className={error5 ? "selError" : "sel"} onChange={handleNameChange5}>
                    <option value="default" disabled hidden selected>Select Player</option>
                    {final.length > 0 ? final.map((i) => { return <option value={`${i.fname}${i.lname}${i.id}`}>{i.fname} {i.lname}</option> }) : null}
                </select>
                {condition ? <p className="error">[**Player Already Selected]</p> : null}
            </div>
            <div style={divStyle}>
                <select name="position1" className={error6 ? "selError" : "sel"} onChange={handlePositionChange}>
                    <option value="Select Position" disabled hidden selected>Select Position</option>
                    {final.length > 0 ? final[index].position.map((i) => { return <option>{i.value}</option> }) : null}
                </select>
                <select name="position2" className={error7 ? "selError" : "sel"} onChange={handlePositionChange}>
                    <option value="Select Position" disabled hidden selected>Select Position</option>
                    {final.length > 0 ? final[index1].position.map((i) => { return <option>{i.value}</option> }) : null}
                </select>
                <select name="position3" className={error8 ? "selError" : "sel"} onChange={handlePositionChange}>
                    <option value="Select Position" disabled hidden selected>Select Position</option>
                    {final.length > 0 ? final[index2].position.map((i) => { return <option>{i.value}</option> }) : null}
                </select>
                <select name="position4" className={error9 ? "selError" : "sel"} onChange={handlePositionChange}>
                    <option value="Select Position" disabled hidden selected>Select Position</option>
                    {final.length > 0 ? final[index3].position.map((i) => { return <option>{i.value}</option> }) : null}
                </select>
                <select name="position5" className={error10 ? "selError" : "sel"} onChange={handlePositionChange}>
                    <option value="Select Position" disabled hidden selected>Select Position</option>
                    {final.length > 0 ? final[index4].position.map((i) => { return <option>{i.value}</option> }) : null}
                </select>
                {condition1 && <p className="error">[**Multiple players can't can play at Same Position]</p>}
            </div>
        </div>
        <div style={{ width: "70px", margin: "auto" }}>
            <button className="Next" onClick={handleNext} disabled={btns} >Next </button>
        </div></>

    )
}

export default First_Quater2
