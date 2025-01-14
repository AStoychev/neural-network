import { useState } from "react";
import Navigation from "./pages/Navigations";
import Home from "./pages/Home";
import PreviewTestImages from "./pages/mnist/PreviewTestImage";

function Router() {

    const [pathname, setPathname] = useState(window.location.pathname);
    
    switch (pathname) {
        case "/mnist/test-images":
            return <PreviewTestImages />;
        default:
            return <Home />
    }
}

function App() {

    return (
        <div className="App">
            <div className="app-container">
                <Navigation />
                <Home />
                <PreviewTestImages />
            </div>
        </div>
    )
}

export default App
