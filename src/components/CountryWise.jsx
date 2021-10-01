import React from "react";

const CountryWise = ({
    flag,
    name,
    cases,
    deaths,
    recovered,
    active,
    critical,
    tests,
    population,
    todayCases,
    todayDeaths,
    todayRecovered,
    casesPerOneMillion,
    deathsPerOneMillion,
    testsPerOneMillion,
    activePerOneMillion,
    recoveredPerOneMillion,
    criticalPerOneMillion,
}) => {
    return (
        <section className="country-wise" style={{margin: "10px 0", color: "rgba(255,255,255,0.8)"}}>
            <div className="left">
                <img
                    src={flag}
                    alt={`${name}'s flag'`}
                    style={{ marginBottom: 30, border: "1px solid transparent", borderRadius: 20 }}
                />
                <h1 style={{ color: "rgba(255,255,255,1)" }}>{name}</h1>
                <div className="general" style={{marginTop: "12px"}}>
                    <h4>General</h4>
                    <p className="countryWiseData">Cases: {cases}</p>
                    <p className="countryWiseData">Deaths: {deaths}</p>
                    <p className="countryWiseData">Recovered: {recovered}</p>
                    <p className="countryWiseData">Active: {active}</p>
                    <p className="countryWiseData">Critical: {critical}</p>
                    <p className="countryWiseData">Tests: {tests}</p>
                    <p className="countryWiseData">Population: {population}</p>
                </div>
            </div>

            <div className="right">
                <div className="today">
                    <h4>Today</h4>
                    <p className="countryWiseData">Today Cases: {todayCases}</p>
                    <p className="countryWiseData">Today Deaths: {todayDeaths}</p>
                    <p className="countryWiseData">Today Recovered: {todayRecovered}</p>
                </div>

                <div className="peronemillion">
                    <h4>Per one million</h4>
                    <p className="countryWiseData">Cases per one million: {casesPerOneMillion}</p>
                    <p className="countryWiseData">Deaths per one million: {deathsPerOneMillion}</p>
                    <p className="countryWiseData">Tests per one million: {testsPerOneMillion}</p>
                    <p className="countryWiseData">Active per one million: {activePerOneMillion}</p>
                    <p className="countryWiseData">Recovered per one million: {recoveredPerOneMillion}</p>
                    <p className="countryWiseData">Critical per one million: {criticalPerOneMillion}</p>
                </div>
            </div>
        </section>
    );
};

export default CountryWise;
