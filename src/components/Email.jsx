import emailjs from "@emailjs/browser";

const public_key = import.meta.env.VITE_REACT_APP_EMAIL_PUBLIC_KEY
const service_id = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE_ID
const template_id = import.meta.env.VITE_REACT_APP_EMAIL_TEMPLATE_ID

const sendCustomeEmail = (form) => {
  emailjs
    .send(
      service_id,
      template_id,
      {
        user_name: form.name,
        email: form.email,
        message: form.message,
      },
      public_key
    )
    .then(() => {
      console.log("Email send Successfully!");
    })
    .catch((err) => console.log(`failed to send email ${err}`));
};

export { sendCustomeEmail };
