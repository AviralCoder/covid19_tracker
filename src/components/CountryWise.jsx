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
        <section className="country-wise">
            <div className="left">
                <img
                    src={flag}
                    alt={`${name}'s flag'`}
                    style={{ marginBottom: 20 }}
                />
                <h1 style={{ color: "green" }}>{name}</h1>
                <div className="general">
                    <h3>General</h3>
                    <p>Cases: {cases}</p>
                    <p>Deaths: {deaths}</p>
                    <p>Recovered: {recovered}</p>
                    <p>Active: {active}</p>
                    <p>Critical: {critical}</p>
                    <p>Tests: {tests}</p>
                    <p>Population: {population}</p>
                </div>
            </div>

            <div className="right">
                <div className="today">
                    <h3>Today</h3>

                    <p>Today Cases: {todayCases}</p>
                    <p>Today Deaths: {todayDeaths}</p>
                    <p>Today Recovered: {todayRecovered}</p>
                </div>

                <div className="peronemillion">
                    <h3>Per one million</h3>

                    <p>Cases per one million: {casesPerOneMillion}</p>
                    <p>Deaths per one million: {deathsPerOneMillion}</p>
                    <p>Tests per one million: {testsPerOneMillion}</p>
                    <p>Active per one million: {activePerOneMillion}</p>
                    <p>Recovered per one million: {recoveredPerOneMillion}</p>
                    <p>Critical per one million: {criticalPerOneMillion}</p>
                </div>
            </div>
        </section>
    );
};

export default CountryWise;
