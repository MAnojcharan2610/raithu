import { Outlet } from "react-router-dom";
import './navbar.scss';
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import NavImage1 from '../../assets/gene-sequence-svgrepo-com.svg';
import { FaCircleUser } from "react-icons/fa6";

const Navbar=()=>{

    const navigateRouter = useNavigate();

    return(
        <Fragment>
        <nav className="navbar-container">
            <div onClick={()=>navigateRouter('/')} className="home">
                <img src={NavImage1} />
                <p></p>
            </div>
            <ul>
                <li onClick={()=>navigateRouter('abstract')} className="nav-li">Abstarct</li>
                <li onClick={()=>navigateRouter('introduction')} className="nav-li">Introduction</li>
                <li onClick={()=>navigateRouter('questionnaire')} className="nav-li">Questionnaire</li>
                <li onClick={()=>navigateRouter('survey-data')} className="nav-li">Survey Data</li>
                <li onClick={()=>navigateRouter('survey-photos')} className="nav-li">Survey Photos</li>
                <li onClick={()=>navigateRouter('conclusion')} className="nav-li">Conclusion</li>
                <li onClick={()=>navigateRouter('team')} className="nav-li">Team</li>
            </ul>
        </nav>
            <Outlet/>
        </Fragment>
    )
}
export default Navbar;