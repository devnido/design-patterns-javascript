module.exports = resource => ({ axios }) => ({
    get: async(req, res) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        return res.send(data)
    },
    post: async(req, res) => {
        const { data } = await axios.post(`https://jsonplaceholder.typicode.com/${resource}`, req.body)
        return res.send(data)
    },
    put: async(req, res) => {
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/${resource}/${req.params.id}`, req.body)
        return res.send(data)
    },
    delete: async(req, res) => {
        await axios.put(`https://jsonplaceholder.typicode.com/${resource}/${req.params.id}`)
        return res.sendStatus(204)
    }
})