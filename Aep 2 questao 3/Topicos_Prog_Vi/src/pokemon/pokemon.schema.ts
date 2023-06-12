import { Schema,model } from "mongoose";


const PokemonSchema= new Schema({

    Nome: {
        type: String,
        required: true,
    },
    Tipo:{ 
        type: Array,
        required: true,
    } ,
    Status:{ 
        type: Array,
        required: true,},
    NumeroDex:{
        type: Number,
        required: true,},
    Altura:{ 
        type: Number,
        required: true,},
    Peso:{ 
        type: Number,
        required: true,},
    Moves:{ 
        type: Array,
        required: true,
    }

})

export default model('Pokemon',PokemonSchema)