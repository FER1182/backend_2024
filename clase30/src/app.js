import express from "express";
import nodemailer from "nodemailer";

const app = express();
const PUERTO = 8080;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./src/public"));

//expresshandlebars
import { engine } from "express-handlebars";
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//routes
app.get("/mail", async (req, res) => {
  try {
    await transport.sendMail({
      from: "Coder Test <fer.232@gmail.com>",
      to: "fernandorudnevich.inedita@gmail.com",
      subject: "Prueba de nodemailer",
      html: `<h1>Prueba de nodemailer</h1> 
            <img src="cid:patito1" />`,
      //para enviar imagen como adjunto
      attachments: [
        {
          filename: "patito.jpg",
          path: "./src/public/img/patito.jpg",
          cid: "patito1",
        },
      ],
    });

    res.send("Email enviado");
  } catch (error) {
    res.status(500).send("error al enviar el email");
  }
});

//database
///**************      CONTRASEÑA DE APLIACIONES DE GOOGLE ` */
//contraseña de aplicaciones de google fer.232 aplicacion CoderHouse_backend2024
//svmu xukg cvzz kzzb

//npm i nodemailer

//mostramos la vista contacto
app.get("/contacto", (req, res) => {
  res.render("contacto");
});

app.post("/enviarmensaje", async (req, res) => {
  const { email, mensaje } = req.body;
  try {
    await transport.sendMail({
      from: "Coder Test <fer.232@gmail.com>",
      to: email,
      subject: "Prueba de nodemailer",
      //html: `<h1>${mensaje}</h1> `,
      text: `${mensaje}`,
    });
    res.send("Email enviado");
  } catch (error) {
    res.status(500).send("error al enviar el email");
  }
});

app.listen(PUERTO, () => {
  console.log("Server running on port ", PUERTO);
});

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "fer.232@gmail.com",
    pass: "svmu xukg cvzz kzzb",
  },
});

//TWILLIO SERVICIO QUE PERMITE ENVIAR SMS WHATS APP Y OTROS
//codigo recuperacion de twillio 55XB9PBZRBA64TBGUUZDSA49Z
const TWILLIO_ACOUNT_SID = "ACcccdccd78d5d352cb76e4c3d22fc592d";
const TWILLIO_AUTH_TOKEN = "882a88c835de18f8dc54722928607601";
const TWILLIO_NUMBER = "+18064981278";

//configuramos el twillio
//npm i twilio
import twilio from "twilio";
const client = twilio(TWILLIO_ACOUNT_SID, TWILLIO_AUTH_TOKEN, TWILLIO_NUMBER);

//creamos una ruta para enviar un sms
app.get("/sms", async (req, res) => {
  try {
    await client.messages.create({
      body: "Prueba de twilio",
      from: "+18064981278",
      to: "+5491151829005",
    });
    res.send("sms enviado");
  } catch (error) {
    res.status(500).send("error al enviar el sms");
  }
});
