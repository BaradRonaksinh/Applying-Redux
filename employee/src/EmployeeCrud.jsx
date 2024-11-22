import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFun, delFun, updateFun } from './redux/EmpAction'

const EmployeeCrud = () => {

    const dispatch = useDispatch()
    const allData = useSelector((state) => state.data)
    const [data, setData] = useState({
        id: "",
        name:"",
        age:"",
        salary:"",
        hour:""
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setData({
            ...data,
            [name]:value //only this change show
        })
    }
    const saveData = (e) => {
        e.preventDefault()
        if(data.id != ""){
            // console.log(updateFun);
            // console.log(dispatch);
            dispatch(updateFun(data.id,data))
        }else{
            dispatch(addFun(data))
        }
    }

    const editData = (id) => {
        let result = allData.find((i,index) => index==id)

        console.log(result);
        setData({
            id:id,
            name:result.name,
            age:result.age,
            salary:result.salary,
            hour:result.hour
        })
    }
  return (
    <>
    <div>
        <h2>Employee Chart</h2>
        <form action="#" method="post" onSubmit={saveData}>
            <label htmlFor="">Name:</label>
            <input type="text" name='name' id='iName' onChange={handleChange}  value={data.name}/><br />
            <label htmlFor="">Age:</label>
            <input type="number" name='age' id='iAge' onChange={handleChange} value={data.age} /><br />
            <label htmlFor="">Salary:</label>
            <input type="number" name='salary' id='iSalary' onChange={handleChange} value={data.salary}/><br />
            <label htmlFor="">Hour:</label>
            <input type="number" name='hour' id='iHour' onChange={handleChange} value={data.hour} /><br /><br />
            <input type="submit"  name='Save' id='iSave'/>

        </form>

        <table>
            <tbody>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td>Hour</td>
                </tr>

                {
                    allData.map((i,index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.salary}</td>
                                <td>{i.hour}</td>
                                <td><button onClick={() => editData(index)}>Edit</button></td>
                                <td><button onClick={() => dispatch(delFun(index))}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
      
    </>
  )
}

export default EmployeeCrud
