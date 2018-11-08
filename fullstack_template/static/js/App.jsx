import React from "react";
import ImageOfTheDay from "./ImageOfTheDay/ImageOfTheDay";
import PageHeader from "./PageHeader/PageHeader";

const App = (props) => (
    <div className="container-fluid">
        <PageHeader />
        <ImageOfTheDay />
    </div>
);

export default App;
