import React from "react";

const  DoctorCategories = ({doctorCategory1}) => {
    return (
        <div className="movie">
    <div>
        <p>{doctorCategory1.created_at}</p>
    </div>
    <div>
        <img src={doctorCategory1.category_image} alt={doctorCategory1.category_name} />
    </div>
    <div>
        <span>
        {
        doctorCategory1.status === 1
         ?
          'Active'
           :
            'InActive'
        }
        </span>
        <h3>{doctorCategory1.category_name}</h3>
    </div>

    </div> 
    )   
}

export default DoctorCategories;