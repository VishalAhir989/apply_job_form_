import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Form = () => {

    const [user, setuser] = useState({
        name: '',
        mobile: '',
        mobile2: '',
        email: '',
        address: '',
        country: ''
    });

    const handelInput = (e) => {
        // console.log(e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setuser({ ...user, [name]: value });
    }


    const navigate = useNavigate();

    const handelsubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://applyjobapi-git-master-vishalahir989s-projects.vercel.app`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            // console.log("User...", response);
            if (response.ok) {
                setuser({
                    name: '',
                    mobile: '',
                    mobile2: '',
                    email: '',
                    address: '',
                    country: ''
                })
                navigate("/Form==SuccessFull--//submit");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.log("Error", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 px-3">
                    <div className="pannel-001">
                        <img src="../../../../public/logo.svg" alt="logo" />
                        <h4>Title:</h4>
                        <p>- Full Stack Developer</p>
                        <h4>Number Of Positions:</h4>
                        <p>- 60</p>
                        <h4>Locations:</h4>
                        <p className="p-0 m-0 mb-3">Remote</p>
                        <ul className="p-0 pannel-icon-001">
                            <li className="mb-2 d-flex"><p className="m-0 p-0"><MdOutlineMail /></p> <span className="ms-2">hello@swiftrut.com</span></li>
                            <li className="mb-2 d-flex"><p className="m-0 p-0"><BsTelephone /></p> <span className="ms-2">8849918975</span></li>
                            <li className="mb-2 d-flex"><p className="m-0 p-0"><FaHome /></p> <span className="ms-2">Surat , Gujarat , India 395007</span></li>
                        </ul>
                        <h4>Locations:</h4>
                        <h4>Requirements</h4>
                        <ul className="p-0 pannel-document-001">
                            <li>At least one year or equivalent of experience in building software applications</li>
                            <li>Experience in building web applications</li>
                            <li>Experience in designing and integrating RESTful APIs</li>
                            <li>Knowledge of Java, React, and JavaScript</li>
                            <li>Excellent debugging and optimization skills</li>
                            <li>Experience in unit/integration testing</li>
                            <li>Bachelor’s degree (or equivalent) in computer science, information technology, or engineering</li>
                            <li>Interest in learning new tools, languages, workflows, and philosophies</li>
                            <li>Professional certification</li>
                        </ul>
                        <h4>Duties</h4>
                        <ul className="p-0 pannel-document-001">
                            <li>Participate in full lifecycle development of software including analysis, design, coding, testing, implementation, deployment and support.</li>
                            <li>Consistently write, translate, and code software programs and applications according to specifications.</li>
                            <li>Employ best practices for designing scalable, extensible, secure applications.</li>
                            <li>Design and develop web applications, WPF applications, web APIs and web services, windows services and console applications using required technologies and SQL Server.</li>
                            <li>Design and develop both internal and external facing APIs/RESTful services for Enterprise Application Integration of applications hosted on premise and in the cloud.</li>
                            <li>Develop release management strategies and configure automated deployment packages for deploying application and database changes to QA.</li>
                            <li>Perform unit testing and analyze application and database performance on new and existing programs for the purposes of correcting errors, and general debugging.</li>
                            <li>Assist with development team code reviews when necessary.</li>
                            <li>Collaborate with development teams and product managers to create innovative software solutions.</li>
                            <li>Keeping up with the latest advancements in programming languages and server apps.</li>
                            <li>Able to develop entire architecture, responsive design, user interaction, and user experience. The ability to use databases, proxies, APIs, version control systems, and third-party applications.</li>
                            <li>Design a plan for stability, scalability, performance optimization, and ongoing improvement. Keep track of new development-related tools, frameworks, methods, and architectures.</li>
                        </ul>
                    </div>
                </div>
                <div className="col-8 px-3">
                    <div className="pannel-002">
                        <h4>About Us</h4>
                        <p>Expertise Technologies is a leading provider of innovative software solutions, empowering businesses to streamline operations and achieve digital transformation. With a customer-centric approach, we deliver cutting-edge technologies tailored to specific needs, fostering efficiency and growth.</p>
                        <p className="mb-0">Please fill in below mention information for apply as Full Stack Developer at Expertise Technologies Private Limited</p>
                        <form action="" className="mt-3" onSubmit={handelsubmit}>
                            <div className="col-12 d-flex">
                                <div className="col-6 pe-2">
                                    <div className="input-wrapper">
                                        <label htmlFor="">Name</label>
                                        <input type="text" value={user.name} name="name" id="name" required onChange={handelInput} />
                                    </div>
                                </div>
                                <div className="col-6 ps-2">
                                    <div className="input-wrapper">
                                        <label htmlFor="">Mobile</label>
                                        <input type="number" value={user.mobile} name="mobile" id="mobile" required onChange={handelInput} />
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-6 pe-2">
                                    <div className="input-wrapper">
                                        <label htmlFor="">Mobile2</label>
                                        <input type="number" value={user.mobile2} name="mobile2" id="mobile2" onChange={handelInput} />
                                    </div>
                                </div>
                                <div className="col-6 ps-2">
                                    <div className="input-wrapper">
                                        <label htmlFor="">Email</label>
                                        <input type="email" value={user.email} name="email" id="email" required onChange={handelInput} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-6 pe-2">
                                    <div className="input-wrapper">
                                        <label htmlFor="">Address</label>
                                        <textarea name="address" value={user.address} id="address" required onChange={handelInput}></textarea>
                                    </div>
                                </div>
                                <div className="col-6 ps-2">
                                    <div className="input-wrapper">
                                        <label htmlFor="country">Country</label>
                                        <select name="country" id="country" value={user.country} onChange={handelInput} required>
                                            <option value="">Select a country</option>
                                            <option value="United States">India</option>
                                            <option value="Canada">Canada</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Germany">Germany</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="button">Apply Now!</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
