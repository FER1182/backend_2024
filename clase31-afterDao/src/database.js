import mongoose from "mongoose";


mongoose.connect('mongodb+srv://fernandorudnevichinedita:231182@cluster0.xe7glky.mongodb.net/Jugueteria?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database connected'))
    .catch(err => console.log("tenemos un error",err)) 
