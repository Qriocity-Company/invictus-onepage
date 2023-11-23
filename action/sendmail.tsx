"use server"
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend("re_ZhujN9je_83ZB2QKqFwnBBJsaE4v2nDwq")
export async function sendEmail(formData: FormData) {

    const senderEmail = formData.get("senderEmail")
    const message = "someone want to visit your website in future for sure!! "

    if (!message || typeof message !== "string" || message.length > 5000) {
        return {
            status: 400,
            error: "Invalid message"
        }
    }
    if (!senderEmail || typeof senderEmail !== "string" || senderEmail.length > 500) {
        return {
            status: 400,
            error: "Invalid email"
        }
    }
    let data ;
    try {
       data =  await resend.emails.send({
            from: "Your Portfolio Contact <onboarding@resend.dev>",
            to: "ashutoshuniyal012@gmail.com",
            subject: "New message from Invictus",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, { message: message, senderEmail: senderEmail }),
        })
    } catch (e: unknown) {
        console.error(e)
        return {
            status: 500,
            error: "Something went wrong",
        }
    }
    return {data};
}