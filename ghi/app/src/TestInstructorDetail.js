import React, { useState, useEffect } from "react";


function InstructorDetail() {
    const [InstructorDetail, setInstructorDetail] = useState([]);
    const getInstructorDetail = async () => {
        const currentUrl = window.location.href
        const list1 = currentUrl.split("/")
        const instructorId = list1[5]
        const detailUrl = `http://localhost:8100/api/instructors/${instructorId}`;
        const response = await fetch(detailUrl)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setInstructorDetail(data)
        }
    }
    useEffect(() => {
        getInstructorDetail()
    }, []);

    return (
        <div className="mt-5">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Certification</th>
                        <th>Yoga Studio</th>
                        <th>Instagram</th>
                        {/* <th>Profile Picture</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{InstructorDetail.first_name} {InstructorDetail.last_name}</td>
                        <td>{InstructorDetail.email}</td>
                        <td>{InstructorDetail.certification}</td>
                        <td>{InstructorDetail.yoga_studio}</td>
                        <td>{InstructorDetail.instagram}</td>
                        {/* <td>{InstructorDetail.profile_picture}</td> */}
                    </tr>
                    {/* {props.instructors.map(instructor => {
                    return (
                        <tr key={instructor.id}>
                            <td>{instructor.first_name} {instructor.last_name}</td>
                            <td>{instructor.email }</td>
                            <td>{instructor.certification}</td>
                            <td>{instructor.yoga_studio}</td>
                            <td>{instructor.instagram}</td>
                            <td><img src ={instructor.profile_picture} alt='' style={{maxWidth: '150px', maxHeight: '150px', objectFit: 'contain'}}/> </td>
                        </tr>
                    );
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default InstructorDetail;