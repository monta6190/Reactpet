
//lena bch nasnaa l base donne 
const mongoose= require("mongoose");// aayt ll monous
const UserSchema = new mongoose.Schema(// bch naaml tableaux fl base taai "schema "
    {
        username:{type:String,required:true,unique:true},
        email:{type:String,required:true,unique:true},
        password:{type:String},
    },
    { timestamps: true }
    );
module.exports=mongoose.model("User",UserSchema);
