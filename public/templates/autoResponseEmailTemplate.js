
emailTemplate = (details)=>{
    return `<div style="border-style: groove;"><pre>
    Hello <b>${details.name}</b>,

    Hope you are doing great,

    Thank you so much for your response, will get back to you at the earliest.

    Thank you,
    Pavan Anand Ch,
    Software Engineer.
    </pre></div>`
}

module.exports = {
  emailTemplate: emailTemplate
}