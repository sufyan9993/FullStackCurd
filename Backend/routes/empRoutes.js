import express from "express";
import { addEmployee, deleteEmployee, getAllEmployees, getEmployee, updateEmployee } from "../controller/empController.js";

const empRoutes = express.Router()

empRoutes.get('/AllEmployees', getAllEmployees)
empRoutes.get('/Employee/:id', getEmployee)
empRoutes.post('/AddEmployee', addEmployee)
empRoutes.put('/UpdateEmployee/:id', updateEmployee)
empRoutes.delete('/DeleteEmployee/:id', deleteEmployee)

export default empRoutes