import React, {  useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col, Table } from 'react-bootstrap';
import '../mid.css'
// import Add from './Add';
import Cmp from './Cmp';
import Dele from './Dele';
import Top from './Top';
import Add from './Add';
const Content = () => {

    const[a,res]=useState("")
    var [j,tk]=useState([])

    
    const addtask=()=>{
        tk([...j,{task:a,id:Date.now(),status:"false"}])
        res("")
    }

    const [dd,dtd]=useState([])
    const dlt=(index)=>{
        const newd=[...j]
        const i=dd.includes(newd[index])
        if(i!==true){
        dd.push(newd[index])
        dtd(dd)
        }
        
        newd.splice(index,1)
        tk(newd)
    }
    // const [c,chk]=useState([])
    const [cmpt,fn]=useState([])

    const ck=(index,id)=>{
        const nw=[...j]
        
        if(nw[index].status==="false"){
            nw[index].status="true"
            cmpt.push(nw[index])
            tk(nw)
            fn(cmpt)    
        }
        else{
            nw[index].status="false"
            const p=[...cmpt]
            const io=p.filter(arr=>arr.id!==id)
            fn(io)
            tk(nw)
        }

    }


    const edt=(index)=>{
        const ed=j[index]
        res(ed.task)
        const newd=[...j]
        newd.splice(index,1)
        tk(newd)
    }


    const dtt=(index)=>{
        const d=[...cmpt]
        
        const i=dd.includes(d[index])
        if(i!==true){
        dd.push(d[index])
        dtd(dd)
        }
        d.splice(index,1)
        fn(d)
        const newd=[...j]
        newd.splice(index,1)
        tk(newd)
    }
    const clr=()=>{
        dtd([])
    }

    return (
        <>
            {/* <Row className='justify-content-center ps-5'>
                <Col lg={3} xs={8}>
                    <input type="text" className='form-control ad mt-5' value={a} onChange={(e)=>res(e.target.value)}></input>
                </Col>
                <Col lg={2} xs={4}>
                    <Button className='bt mt-5' onClick={addtask}>Add</Button>
                </Col>
            </Row > */}
            <Add add={addtask} res={res} vl={a}/>
            <Row className='mt-5'>
                <Cmp dt={cmpt} y={dtt}/>
                <Col lg={6} xs={12} className='mt-3 ps-4'>
                    <div className='tbl'>
                        <Table responsive>
                        
                            {j.map((i,index)=>(
                                <>
                            <tr className='ms-3' key={index}>
                                <td className='txt'>
                                    <div
                                    className='ms-3' style={{ backgroundColor: "rgb(23, 42, 58)", color: "white" ,textDecoration:i.status==="false"?"none":"line-through",textDecorationColor:"whitesmoke"}}>{i.task}
                                    <label className='ck'>
                                    <input type="checkbox" value={i.status} onChange={()=>ck(index,i.id)}></input>
                                    <span className='cbox'></span>
                                    </label>
                                    </div>
                                </td>
                                <td style={{visibility:i.status=="false"?'visible':'hidden'}}>
                                    <img src="../edit.png" width="60px" height="60px" style={{ backgroundColor: "rgb(23, 42, 58)",cursor:'pointer' }} className='ms-3' onClick={()=>edt(index)}></img>
                                </td>
                                
                                <td style={{visibility:i.status=="false"?'visible':'hidden'}}>

                                <img src="../delete.png" width="60px" height="60px" style={{ backgroundColor: "rgb(23, 42, 58)",cursor:'pointer'}} className='cngh' onClick={()=>dlt(index)}></img>
                            
                            
                                </td>
                            </tr>
                            <hr className='un'></hr>
                            </>
                            ))}                                       
                        </Table>
                    </div>
                </Col>
                
                <Dele led={dd} clr={clr}/>
            </Row>
        </>
    )
}

export default Content