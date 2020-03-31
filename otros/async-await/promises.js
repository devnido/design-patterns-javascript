const fn1 = () => {
    ajax()
        .then(() => {
            const a = 1;
            return ajax()
        })
        .then(() => {
            console.log(a); //error

            return ajax()
        })
        .then(() => {
            return ajax()
        })
        .then(() => {
            return ajax()
        })
        .then(() => {
            return ajax()
        })
        .then(() => {
            return ajax()
        })
}