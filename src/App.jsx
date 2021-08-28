import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { Flexbox } from "./components/Layout";
import { sortData } from "./utils";
import CaseType from "./components/CaseType";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CaseTable from "./components/CaseTable";
import CountryWise from "./components/CountryWise";

const App = () => {
    const [casesDetailsWorldwide, setCaseDetailsWorldwide] = useState([
        {
            type: "Confirmed",
            added: 1234,
            cases: 12345,
            background: "rgba(255, 110, 110, 0.797)",
        },
        {
            type: "Active",
            added: `-`,
            cases: 12345,
            background: "rgba(108, 204, 255, 0.797)",
        },
        {
            type: "Recovered",
            added: 1234,
            cases: 12345,
            background: "rgba(132, 255, 79, 0.797)",
        },
        {
            type: "Deceased",
            added: 1234,
            cases: 12345,
            background: "rgba(172, 175, 177, 0.797)",
        },
    ]);
    const [metaDataWorldwide, setMetaDataWorldwide] = useState([
        {
            type: "Affected countries",
            added: `-`,
            cases: 222,
            background: "rgba(240, 255, 74, 0.797)",
        },
        {
            type: "Tests",
            added: `-`,
            cases: 1234,
            background: "rgba(218, 107, 255, 0.797)",
        },
        {
            type: "Population",
            added: `-`,
            cases: 12345,
            background: "rgba(255, 108, 55, 0.797)",
        },
        {
            type: "Critical",
            added: `-`,
            cases: 12345,
            background: "rgba(67, 255, 189, 0.797)",
        },
    ]);
    const [tableData, setTableData] = useState([]);

    const [countrySelected, setCountrySelected] = useState("India");

    const [countries, setCountries] = useState([]);

    const [countryWiseMetaData, setCountryWiseMetaData] = useState({});

    const darkTheme = createTheme({
        palette: {
            type: "dark",
        },
    });

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://disease.sh/v3/covid-19/all");
            const response2 = await fetch(
                "https://disease.sh/v3/covid-19/countries"
            );
            const data = await response.json();
            const data2 = await response2.json();

            setCaseDetailsWorldwide([
                {
                    type: "Confirmed",
                    added: data.todayCases,
                    cases: data.cases,
                    background: "rgba(255, 110, 110, 0.797)",
                },
                {
                    type: "Active",
                    added: `-`,
                    cases: data.active,
                    background: "rgba(108, 204, 255, 0.797)",
                },
                {
                    type: "Recovered",
                    added: data.todayRecovered,
                    cases: data.recovered,
                    background: "rgba(132, 255, 79, 0.797)",
                },
                {
                    type: "Deceased",
                    added: data.todayDeaths,
                    cases: data.deaths,
                    background: "rgba(172, 175, 177, 0.797)",
                },
            ]);
            setMetaDataWorldwide([
                {
                    type: "Affected countries",
                    added: `-`,
                    cases: data.affectedCountries,
                    background: "rgba(240, 255, 74, 0.797)",
                },
                {
                    type: "Tests",
                    added: `-`,
                    cases: data.tests,
                    background: "rgba(218, 107, 255, 0.797)",
                },
                {
                    type: "Population",
                    added: `-`,
                    cases: data.population,
                    background: "rgba(255, 108, 55, 0.797)",
                },
                {
                    type: "Critical",
                    added: `-`,
                    cases: data.critical,
                    background: "rgba(67, 255, 189, 0.797)",
                },
            ]);
            setCountries(data2);
            const sorted = sortData(data2);
            setTableData(sorted);
        };

        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                `https://disease.sh/v3/covid-19/countries/${countrySelected}`
            );

            const data = await response.json();

            setCountryWiseMetaData({
                name: data.country,
                flag: data.countryInfo.flag,
                cases: data.cases,
                deaths: data.deaths,
                recovered: data.recovered,
                active: data.active,
                critical: data.critical,
                tests: data.tests,
                population: data.population,
                todayCases: data.todayCases,
                todayDeaths: data.todayDeaths,
                todayRecovered: data.todayRecovered,
                casesPerOneMillion: data.casesPerOneMillion,
                deathsPerOneMillion: data.deathsPerOneMillion,
                testsPerOneMillion: data.testsPerOneMillion,
                activePerOneMillion: data.activePerOneMillion,
                recoveredPerOneMillion: data.recoveredPerOneMillion,
                criticalPerOneMillion: data.criticalPerOneMillion,
            });
        };

        getData();
    }, [countrySelected]);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Navbar />

                <Switch>
                    <Route path="/" exact>
                        <h2
                            style={{
                                textAlign: "center",
                                marginBottom: 20,
                                marginTop: 20,
                                color: "white",
                            }}
                        >
                            Worldwide
                        </h2>
                        <Flexbox
                            style={{
                                justifyContent: "space-around",
                                marginTop: "20px",
                            }}
                        >
                            {casesDetailsWorldwide.map((elem) => (
                                <CaseType
                                    background={elem.background}
                                    type={elem.type}
                                    added={elem.added}
                                    cases={elem.cases}
                                />
                            ))}
                        </Flexbox>

                        <Flexbox
                            style={{
                                justifyContent: "space-around",
                                marginTop: "20px",
                            }}
                        >
                            {metaDataWorldwide.map((elem) => (
                                <CaseType
                                    background={elem.background}
                                    type={elem.type}
                                    added={elem.added}
                                    cases={elem.cases}
                                />
                            ))}
                        </Flexbox>

                        <h2
                            style={{
                                textAlign: "center",
                                marginBottom: 20,
                                marginTop: 20,
                                color: "white",
                            }}
                        >
                            Table statistics
                        </h2>

                        <CaseTable data={tableData} />

                        <h2
                            style={{
                                textAlign: "center",
                                marginBottom: 20,
                                marginTop: 20,
                                color: "white",
                            }}
                        >
                            Countrywise
                        </h2>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={countrySelected}
                            onChange={(e) => {
                                setCountrySelected(e.target.value);
                            }}
                            style={{
                                width: "300px",
                                padding: 10,
                                position: "relative",
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            {countries.map((elem) => (
                                <MenuItem value={elem.country}>
                                    {elem.country}
                                </MenuItem>
                            ))}
                        </Select>

                        <CountryWise
                            name={countryWiseMetaData.name}
                            flag={countryWiseMetaData.flag}
                            cases={countryWiseMetaData.cases}
                            deaths={countryWiseMetaData.deaths}
                            recovered={countryWiseMetaData.recovered}
                            active={countryWiseMetaData.active}
                            critical={countryWiseMetaData.critical}
                            tests={countryWiseMetaData.tests}
                            population={countryWiseMetaData.population}
                            todayCases={countryWiseMetaData.todayCases}
                            todayDeaths={countryWiseMetaData.todayDeaths}
                            todayRecovered={countryWiseMetaData.todayRecovered}
                            casesPerOneMillion={
                                countryWiseMetaData.casesPerOneMillion
                            }
                            deathsPerOneMillion={
                                countryWiseMetaData.deathsPerOneMillion
                            }
                            testsPerOneMillion={
                                countryWiseMetaData.testsPerOneMillion
                            }
                            activePerOneMillion={
                                countryWiseMetaData.activePerOneMillion
                            }
                            recoveredPerOneMillion={
                                countryWiseMetaData.recoveredPerOneMillion
                            }
                            criticalPerOneMillion={
                                countryWiseMetaData.criticalPerOneMillion
                            }
                        />

                        <p
                            style={{
                                textAlign: "center",
                                background: "white",
                                padding: 10,
                                marginTop: 20,
                            }}
                        >
                            <b>&copy; Aviral Kochgaway 2021</b>
                        </p>
                    </Route>

                    <Route path="/contribute" exact>
                        <div className="contribute"></div>
                    </Route>

                    <Route path="/info" exact>
                        <div className="info">
                            <p>
                                This app has been made using React JS on the
                                frontend and uses the <b>Disease.sh</b> API
                                available for free. This project was also made
                                using React Bootstrap and Material UI. For
                                routing, React-router-dom has been used. <br />{" "}
                                <br />
                                <b>Api Info - </b> The api we are using is the
                                Disease.sh api. We made requests from that API
                                for the general worldwide covid19 information
                                (which yuo can see in the home page as coloured
                                boxes). The table has been made using
                                https://disease.sh/v3/covid-19/countries
                                <br />
                                <br />
                                <b>Tools and libraries used -</b>
                                The whole app has been made using React.js
                                library. Material UI and React Bootstrap has
                                been used for the UI library in this app. Some
                                features of this app are -{" "}
                                <ul>
                                    <li>Ripple Effect</li>
                                    <li>Fetch function on the backend</li>
                                    <li>Totally responsive</li>
                                    <li>
                                        React, Material UI and Bootstrap in the
                                        frontend.
                                    </li>
                                    <li>
                                        Vercel and Github for hosting website
                                    </li>
                                    <li>Coded in VS Code.</li>
                                    <li>Yarn for package managing</li>
                                </ul>{" "}
                                <br />
                                <b>Copyright -</b>
                                You may copy the project but please do not tell
                                that you made it on your own. If the project has
                                been used by you, then please make sure to give
                                credit to the original developer. Projects like
                                such take a lot of time and effort to make. Even
                                if you are using it, don't tell that you have
                                put your own effort into this project. <br />
                                <br />
                            </p>

                            <br />
                            <p style={{ textAlign: "center" }}>
                                <b>&copy; Aviral Kochgaway 2021</b>
                            </p>
                        </div>
                    </Route>

                    <Route path="/vaccine" exact>
                        <h1>vaccine</h1>
                    </Route>
                </Switch>
            </ThemeProvider>
        </>
    );
};

export default App;
