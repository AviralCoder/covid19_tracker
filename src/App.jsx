import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { Grid, Flexbox } from "./components/Layout";
import { sortData } from "./utils";
import CaseType from "./components/CaseType";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CaseTable from "./components/CaseTable";

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
                    </Route>

                    <Route path="/contribute" exact>
                        <h1>contribute</h1>
                    </Route>

                    <Route path="/info" exact>
                        <h1>info</h1>
                    </Route>

                    <Route path="/indian-cases" exact>
                        <h1>indian-cases</h1>
                    </Route>
                </Switch>
            </ThemeProvider>
        </>
    );
};

export default App;
