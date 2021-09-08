import React from "react";

const Info = () => {
    return (
        <>
            <div className="info">
                <p>
                    This app has been made using React JS on the frontend and
                    uses the <b>Disease.sh</b> API available for free. This
                    project was also made using React Bootstrap and Material UI.
                    For routing, React-router-dom has been used. <br /> <br />
                    <b>Api Info - </b> The api we are using is the Disease.sh
                    api. We made requests from that API for the general
                    worldwide covid19 information (which yuo can see in the home
                    page as coloured boxes). The table has been made using
                    https://disease.sh/v3/covid-19/countries
                    <br />
                    <br />
                    <b>Tools and libraries used -</b>
                    The whole app has been made using React.js library. Material
                    UI and React Bootstrap has been used for the UI library in
                    this app. Some features of this app are -{" "}
                    <ul>
                        <li>Ripple Effect</li>
                        <li>Fetch function on the backend</li>
                        <li>Totally responsive</li>
                        <li>
                            React, Material UI and Bootstrap in the frontend.
                        </li>
                        <li>Vercel and Github for hosting website</li>
                        <li>Coded in VS Code.</li>
                        <li>Yarn for package managing</li>
                    </ul>{" "}
                    <br />
                    <b>Copyright -</b>
                    You may copy the project but please do not tell that you
                    made it on your own. If the project has been used by you,
                    then please make sure to give credit to the original
                    developer. Projects like such take a lot of time and effort
                    to make. Even if you are using it, don't tell that you have
                    put your own effort into this project. <br />
                    <br />
                </p>

                <br />
                <p style={{ textAlign: "center" }}>
                    <b>&copy; Aviral Kochgaway 2021</b>
                </p>
            </div>
        </>
    );
};

export default Info;
