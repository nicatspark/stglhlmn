import type { APIRoute } from 'astro'
import nodemailer from 'nodemailer'
import { Temporal } from '@js-temporal/polyfill'
import fs from 'node:fs'

const emailTo = import.meta.env.EMAIL
const emailToPass = import.meta.env.PASS
const host = import.meta.env.HOST

export const post: APIRoute = async ({ request }) => {
  // console.log('request', request)

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json()
    const name = formData.name
    const email = formData.email
    const subject = formData.subject
    const message = `${formData.message}
    ----------------------------------------------------------------------
    From: ${name} • email: ${email}
    `
    const sentdate = Temporal.Now.plainDateTimeISO().toString()

    // read previous log file and append new log
    // saveToLog(name, email, subject, formData.message, sentdate)

    const html = `<div style="margin: 20px auto;font-family: Helvetica, Verdana, sans-serif">${message.replace(
      /[\r\n]/g,
      '<br>'
    )}</div>`

    // sendmail
    let mailTransporter = nodemailer.createTransport({
      host,
      port: 587,
      secure: false,
      auth: {
        user: emailTo,
        pass: emailToPass,
      },
    })

    let mailDetails = {
      from: email,
      to: emailTo,
      subject: `${new URL(request.url).hostname}: ${subject}`,
      text: message,
      html,
    }

    console.log(
      '***************************** mailDetails',
      mailDetails,
      import.meta.env.EMAIL
    )
    let mailresult
    try {
      mailresult = await mailTransporter.sendMail(mailDetails)
    } catch (error) {
      console.log('******* Error: ', error)
    }
    console.log('Message sent: %s', mailresult?.messageId)

    console.log('mailresult', mailresult)

    // return response
    return new Response(JSON.stringify({ ...mailDetails, success: true }), {
      status: 200,
    })
  }
  return new Response(null, { status: 400 }) // if not a json request
}
// function saveToLog(
//   name: string,
//   email: string,
//   subject: string,
//   message: string,
//   sentdate: string
// ) {
//   const logFilePath = 'sentMailLog.json'
//   // make sure log file exists
//   if (!fs.existsSync(logFilePath)) {
//     try {
//       fs.writeFileSync(logFilePath, '[]')
//     } catch (error) {
//       console.log('Error creating log file:', error)
//     }
//   }
//   let previousLogs = []
//   try {
//     const logFileData = fs.readFileSync(logFilePath, 'utf-8')
//     previousLogs = JSON.parse(logFileData)
//   } catch (error) {
//     console.log('Error reading log file:', error)
//   }

//   // append mail to log file
//   const logEntry = { name, email, subject, message, sentdate }
//   previousLogs.push(logEntry)
//   fs.writeFileSync(logFilePath, JSON.stringify(previousLogs, null, 2))
// }
