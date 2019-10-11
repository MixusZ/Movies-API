const mongoose = require('mongoose');

const URL_MONGO = 'mongodb+srv://Mixus:josemania@cluster0-ttcdu.mongodb.net/test';

mongoose.connect(
    URL_MONGO,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (error) => {
        if (error) console.log(error);
        if (!error) console.log('Conexion exitosa Director');
    }
)

const Schema = mongoose.Schema;

const directorSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            default: 0
        },
        isActive: {
            type: Boolean,
            default: true
        },
        nationality: {
            type: String,
            enum: ['MX','US','NA'],
            default: 'NA'
        }
    },
    {timestamps: true}
)

const Director = mongoose.model('Director', directorSchema);

module.exports = { Director };