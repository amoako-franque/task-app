import { ValidationChain, body } from "express-validator"

import { Priority } from "../enums/Priority"
import { Status } from "../enums/Status"

export const createValidator: ValidationChain[] = [
	body("title")
		.not()
		.isEmpty()
		.withMessage("Please enter task title to add a task")
		.trim()
		.isString()
		.withMessage("Title needs to be in text format"),
	body("date")
		.not()
		.isEmpty()
		.withMessage("Please select a date. Date for task is required")
		.isString()
		.withMessage("Select a date from the calender provided."),
	body("description")
		.trim()
		.isString()
		.withMessage("Enter your task description to continue"),
	body("priority")
		.trim()
		.isIn([Priority.normal, Priority.high, Priority.low])
		.withMessage("Priority can only be normal,high or low"),
	body("status")
		.trim()
		.isIn([Status.todo, Status.inProgress, Status.completed])
		.withMessage("Status can only be todo,inProgress or completed"),
]

export const updateValidator = [
	body("id")
		.not()
		.isEmpty()
		.withMessage("Provide task id to continue")
		.trim()
		.isString()
		.withMessage("ID needs to be a valid uuid format"),
	body("status")
		.trim()
		.isIn([Status.todo, Status.inProgress, Status.completed])
		.withMessage("Status can only be todo,inProgress or completed"),
]
