import { useEffect, useState } from "react"; 

import DoctorCategories from "./DoctorCategories";

import './App.css';

const API_URL = 'http://phplaravel-1107828-3884190.cloudwaysapps.com/api';


const cat1 = {
    
        "id": 1,
        "category_name": "PSYCHOLOGIST",
        "category_image": "https://phplaravel-1107828-3884190.cloudwaysapps.com/uploads/specialist_categories/63f1c650f73116aa85461589ad106669.png",
        "status": 1,
        "created_at": "2022-07-19 05:41:43",
        "updated_at": "2022-08-24 21:03:33"
        }

const App = () => {

    const [doctorCategory, setdoctorCategory] = useState([]);

    const doctorCategories = async (result) => {
        const response = await fetch(`${API_URL}/customer/get_doctor_categories`);
        // console.log(data);
        const data = await response.json();
        console.log(data);
        setdoctorCategory(data.result);
    }

    useEffect(() => {
        doctorCategories('result');
    },[]);

    return (
        <div className="app">
            <h1>Doc App</h1>

{
    doctorCategory?.length > 0
    ? (
        <div className="container">
<DoctorCategories doctorCategory1= {doctorCategory} />
</div>
    ) :
    <div className="empty">
        <h2>No Category Find..</h2>
    </div>

}

        </div>

    );
}

export default App;
