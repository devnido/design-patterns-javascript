// ejemplo
const f = (x) => {
    return () => console.log(`Rayos ${x}!`);
}

f('luis')()

// caso practico mongoose
// exporta una funcion que nos va a permitir crear modelos de mongoose con esos datos como base
const auditProps = {
    createdAt: { default: new Date },
    updatedAy: { default: new Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' }
}

const Model = defaultProps => {
    return (name, props) => {
        const schema = mongoose.schema({
            ...defaultProps,
            ...props
        })

        return mongoose.model(name, schema)
    }
}

export const withAudit = Model(auditProps)

/// se utilizaria de la siguiente forma

withAudit({
    name: String,
    desc: String
})