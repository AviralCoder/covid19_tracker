import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { Grid, Flexbox } from "./components/Layout";
import { sortData } from "./utils";

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
    const [tableData, setTableData] = useState([]);

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
                    <Route path="/" exact></Route>

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
