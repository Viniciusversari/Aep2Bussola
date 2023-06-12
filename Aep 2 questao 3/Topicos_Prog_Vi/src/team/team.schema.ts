import {Schema,model} from 'mongoose';

const teamSchema=new Schema(
    {
    trainerName:{
            type:String
        },
    team:[{
            name:{type:String,required:true}
        },
    ]
    } 
    ,{
        timestamps:true
    }
)

export default model('Team',teamSchema)
