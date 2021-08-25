export const sortData = (data) => {
    const countries = [...data];

    countries.sort((a, b) => {
        if (b.cases > a.cases) {
            return 1;
        } else {
            return -1;
        }
    });

    return countries;
};
