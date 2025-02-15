import {BrowserRouter, Routes as Switch, Route} from "react-router-dom";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Home from "./Home";
import ResearchWork from "./Reserach Work";
import Projects from "./Projects";
import Internship from "./Internship";
import Achievements from "./Achievements";
import Hobbies from "./Hobbies";

const Routes = () => {
    const appFlow = (
        <>
            <Navbar/>
            <Switch>
                <Route path="*" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/internship" element={<Internship/>}/>
                <Route path="/research-work" element={<ResearchWork/>}/>
                <Route path="/achievements" element={<Achievements/>}/>
                <Route path="/hobbies" element={<Hobbies/>}/>

            </Switch>
            <Footer/>
        </>
    );
    return (
        <BrowserRouter>
            {appFlow}
        </BrowserRouter>
    );
};

export default Routes;