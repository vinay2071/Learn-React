import Expenses from "./Components/Expenses/Expenses";
import React, {useState,useEffect} from 'react'
import NewExpense from "./Components/NewExpense/NewExpense.js";

let dummy_expenses = [
    {
        id:"e1",
        title:"School Fee",
        date: new Date(2021,7,25),
        amount: 300
    },
    {
        id:"e2",
        title:"Rent",
        date: new Date(2021,7,25),
        amount: 400
    },
    {
        id:"e3",
        title:"Medical Fee",
        date: new Date(2021,7,25),
        amount: 500
    },
    {
        id:"e4",
        title:"Electricity bill",
        date: new Date(2021,7,25),
        amount: 600
    }
]

const  App = () =>
{

    const [expenses,setNewExpenses] = useState(dummy_expenses);


    // function fetchData(){
    //     fetch('https://techgun.website/sample/api/read.php').then(
    //         response => {
    //             return response.json();
    //         }
    //     ).then(
    //         data => {
    //             //console.log(data);
    //             setNewExpenses(data);
    //         }
    //     );
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    const secondParentData = (data)=>{

           const updatedExpenses = [data,...expenses];
           setNewExpenses(updatedExpenses);
           console.log(data);

        // fetch('https://techgun.website/sample/api/create.php', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'content-Type' : 'application/json'
        //     }
        // }).then(
        //     response => {
        //         fetchData();
        //     }
        // );
    }

    return (
         <div>
            <NewExpense onSecondParentData = {secondParentData}/>
            <Expenses item = {expenses}/>
         </div>
    );
}

export default App;
