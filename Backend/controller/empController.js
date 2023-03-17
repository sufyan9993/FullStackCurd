import empModel from "../model/empModel.js";


export const getAllEmployees = (req, res) => {
    empModel.find()
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err.message }))
}

export const getEmployee = (req, res) => {
    empModel.findById(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err.message }))
}

export const addEmployee = (req, res) => {
    const { Name, Age, Address } = req.body
    empModel({ Name: Name.trim(), Age: +Age, Address: Address.trim()}).save()
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err.message }))

}

export const updateEmployee = (req, res) => {
    empModel.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err.message }))
}

export const deleteEmployee = (req, res) => {
    empModel.findByIdAndDelete(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => res.send({ error: err.message }))
}