/** Import react-router-dom dependencies */
import { Route, Switch } from "react-router-dom";

/** Import defined components */
import About from "./Components/About/About";
import AccommodationsList from "./Components/AccommodationsList/AccommodationsList";
import Contact from "./Components/Contact/Contact";
import Errors from "./Components/Errors/Errors";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import OwnerService from "./Components/OwnerService/OwnerService";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";

/** Import css file */
import "./App.css";

/** Exported function */
function App() {
    return (
        <div className="App">
            {/** NavBar component */}
            <NavBar />

            {/** App routes */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/accommodations" component={AccommodationsList} />
                <Route path="/owner-service" component={OwnerService} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/sign-in" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/*" component={Errors} />
            </Switch>

            {/** Footer component */}
            <Footer />
        </div>
    );
}

export default App;
