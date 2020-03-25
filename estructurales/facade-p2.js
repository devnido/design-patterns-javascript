// se toma una implementacion compleja y se simplifica utilizando y wrapper por ensima

const https = require('https')

const get = url => new Promise((resolve, reject) => {

    const comp = url.split('/')

    const host = comp.shift()

    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    }

    console.log(options);


    const req = https.request(options, res => {
        res.setEncoding('utf8')
        let body = ''
        res.on('data', d => {
            body += d
        })

        res.on('end', d => {
            const parsed = JSON.parse(body)
            resolve(parsed)
        })

    })

    req.on('error', (e) => {
        console.error(reject(e))
    })

    req.end()
})


const main = async() => {
    const result = await get('jsonplaceholder.typicode.com/users')
    console.log(result);

}

main()