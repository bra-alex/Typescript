import { Router } from 'express'

import Reminder from '../models/reminder'
import CreateReminderDto from '../models/dtos/create-reminder'

const router = Router()
const reminders: Reminder[] = []

router.get('/', (req, res) => {
  res.status(200).json(reminders)
})

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto
  const reminder = new Reminder(title)
  reminders.push(reminder)
  res.status(201).json(reminder)
})

export default router
