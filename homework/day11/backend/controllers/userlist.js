import { User } from '../models/user.model.js'

export class List {
    
    list = async (req, res) => { 
  

        const result = await User.find()
      
        
        res.send(result)
    }
}
