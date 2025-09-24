

const nodemailer = require("nodemailer");

module.exports = async function (context, req) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: { error: "Todos los campos son obligatorios." },
        };
        return;
    }

    // Configura aquí el transporte SMTP o SendGrid
    //const transporter = nodemailer.createTransport({
    //    host: "smtp.example.com", // Reemplaza con tu SMTP
    //    port: 465,
    //    secure: true,
    //    auth: {
    //        user: "usuario@example.com",
    //        pass: "contraseña",
    //    },
    //});
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "timeonbyhubalinno@gmail.com",
            pass: "hubalinno@Time0n",
        },
    });

    const mailOptions = {
        from: 'no-reply@timeon.tech',
        to: 'ernestodomenech@ideandogroup.com',
        subject: 'Nueva solicitud desde Timeon Ambassador Landing',
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        context.res = {
            status: 200,
            body: { success: true, message: "Formulario enviado correctamente." },
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: { error: "Error al enviar el correo.", details: error.message },
        };
    }
};
