import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import Select from 'react-select'

const FirstQuater = (props) => {
    const [arr, setArr] = useState([])
    const [uniindex1, setUniindex1] = useState(0)
    const [uniindex2, setUniindex2] = useState(0)
    const [uniindex3, setUniindex3] = useState(0)
    const [uniindex4, setUniindex4] = useState(0)
    const [uniindex5, setUniindex5] = useState(0)
    let data = ""

    // const options=props.final.map((i)=>{return {value:i.fname+i.lname,lable:i.fname+i.lname}})
    // console.log(options,"onChange={handleChange}")

    const [positions, setPositions] = useState({
        position1: "",
        position2: "",
        position3: "",
        position4: "",
        position5: "",
    })

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
    }

    // const [arr,setArr]=useState([])
    const handleNext = () => {
        //    if (
        //         positions.position1 !== positions.position2 &&
        //         positions.position1 !== positions.position3 &&
        //         positions.position1 !== positions.position4 &&
        //         positions.position1 !== positions.position5
        //     ) {
        //         // debugger
        //         if (
        //             positions.position2 !== positions.position1 &&
        //             positions.position2 !== positions.position3 &&
        //             positions.position2 !== positions.position4 &&
        //             positions.position2 !== positions.position5
        //         ) {
        //             // debugger
        //             if (
        //                 positions.position3 !== positions.position2 &&
        //                 positions.position3 !== positions.position1 &&
        //                 positions.position3 !== positions.position4 &&
        //                 positions.position3 !== positions.position5
        //             ) {
        //                 // debugger
        //                 if (
        //                     positions.position4 !== positions.position3 &&
        //                     positions.position4 !== positions.position2 &&
        //                     positions.position4 !== positions.position1 &&
        //                     positions.position4 !== positions.position5
        //                 ) {
        //                     // debugger

        //                     if (
        //                         positions.position5 !== positions.position4 &&
        //                         positions.position5 !== positions.position3 &&
        //                         positions.position5 !== positions.position2 &&
        //                         positions.position5 !== positions.position1
        //                     ) {
        //                         // debugger
        alert("Enjoy Playing")
        //                 }
        //                 else {
        //                     // debugger
        //                     // alert("Error 5")
        //                     alert("Silgle player cannot be play at same position")
        //                 }
        //             } else {
        //                 // debugger
        //                 alert("Silgle player cannot be play at same position")
        //                 // alert("Error 4")
        //             }
        //         } else {
        //             // debugger
        //             alert("Silgle player cannot be play at same position")
        //             // alert("Error 3")
        //         }
        //     } else {
        //         // debugger
        //         alert("Silgle player cannot be play at same position")
        //         // alert("Error 2")
        //     }
        // } else {
        //     // debugger
        //     alert("Silgle player cannot be play at same position")
        //     // alert("Error 1")
        // }
    }
    // const handleChange = (e) => {
    //     setPositions((old) => ({ ...old, [e.target.name]: e.target.value }))
    //     console.log(e.target.value, e.target.name);
    // }
    // console.log("Positions ", positions);

    console.log("Props ", props);
    const handleChange = (e) => {
        let temp = e.target.value.split(" ")[0]
        console.log("Temp ", temp);
        setArr((old) => ({ ...old, [e.target.name]: e.target.value }))
        console.log("Arr ", arr);

        const filter = props.final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname)) })
        console.log("filter ", filter);
        setUniindex1(filter)
    }

    const handleChange1 = (e) => {
        let temp = e.target.value.split(" ")[0]
        console.log("Temp ", temp);
        setArr((old) => ({ ...old, [e.target.name]: e.target.value }))
        console.log("Arr ", arr);

        const filter = props.final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname)) })
        console.log("filter ", filter);
        setUniindex2(filter)
    }
    const handleChange2 = (e) => {
        let temp = e.target.value.split(" ")[0]
        console.log("Temp ", temp);
        setArr((old) => ({ ...old, [e.target.name]: e.target.value }))
        console.log("Arr ", arr);

        const filter = props.final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname)) })
        console.log("filter ", filter);
        setUniindex3(filter)
    }
    const handleChange3 = (e) => {
        let temp = e.target.value.split(" ")[0]
        console.log("Temp ", temp);
        setArr((old) => ({ ...old, [e.target.name]: e.target.value }))
        console.log("Arr ", arr);

        const filter = props.final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname)) })
        console.log("filter ", filter);
        setUniindex4(filter)
    }
    const handleChange4 = (e) => {
        let temp = e.target.value.split(" ")[0]
        console.log("Temp ", temp);
        setArr((old) => ({ ...old, [e.target.name]: e.target.value }))
        console.log("Arr ", arr);

        const filter = props.final.findIndex((i) => { return (e.target.value.includes(i.fname) && e.target.value.includes(i.lname)) })
        console.log("filter ", filter);
        setUniindex5(filter)
    }

    // const handleChange1 = (e) => {
    //     console.log("e.target.value ", e.target.value);
    // }
    return (
        <div>
            <div className="Form">
                <div style={{ width: "50%" }}>
                    <select name="n1" className="sel" style={styles} onChange={handleChange} >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.final.map((i, j) => { return <option>{i.fname + i.lname}</option> })}
                    </select>
                    <select name="n2" className="sel" style={styles} onChange={handleChange1} >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.final.map((i) => { return <option>{i.fname + i.lname}</option> })}
                    </select>
                    <select name="n3" className="sel" style={styles} onChange={handleChange2} >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.final.map((i) => { return <option>{i.fname + i.lname}</option> })}
                    </select>
                    <select name="n4" className="sel" style={styles} onChange={handleChange3} >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.final.map((i) => { return <option>{i.fname + i.lname}</option> })}
                    </select>
                    <select name="n5" className="sel" style={styles} onChange={handleChange4} >
                        <option value="Select..." disabled hidden selected>Select...</option>
                        {props.final.map((i) => { return <option>{i.fname + i.lname}</option> })}
                    </select>
                    {console.log("props.final", props.final)}
                </div>

                {/* SKILLS SELECTION */}

                <div style={{ borderLeft: "2px black solid", width: "50%" }}>
                    <select name="p1" className="sel" style={styles} onChange={handleChange1} >
                        <option value="Select..." selected disabled hidden>Select...</option>
                        {props.final[uniindex1].position.map((i) => { return <option>{i.value}</option> })}
                    </select>
                    <select name="p2" className="sel" style={styles} onChange={handleChange1} >
                        <option value="Select..." selected disabled hidden>Select...</option>
                        {props.final[uniindex2].position.map((i) => { return <option>{i.value}</option> })}
                    </select>
                    <select name="p3" className="sel" style={styles} onChange={handleChange1} >
                        <option value="Select..." selected disabled hidden>Select...</option>
                        {props.final[uniindex3].position.map((i) => { return <option>{i.value}</option> })}                    </select>
                    <select name="p4" className="sel" style={styles} onChange={handleChange1} >
                        <option value="Select..." selected disabled hidden>Select...</option>
                        {props.final[uniindex4].position.map((i) => { return <option>{i.value}</option> })}
                    </select>
                    <select name="p5" className="sel" style={styles} onChange={handleChange1} >
                        <option value="Select..." selected disabled hidden>Select...</option>
                        {props.final[uniindex5].position.map((i) => { return <option>{i.value}</option> })}
                    </select>
                </div>
            </div>
            <div style={{ width: "50%", float: "right", margin: "auto" }}>
                <Button className="Next" variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </div>
        </div>
    )
}

export default FirstQuater
