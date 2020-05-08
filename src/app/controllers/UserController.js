import User from '../models/User';

class UserController {
    async store(req, res)
    {

        const userExists = await User.findOne({ where: { email: req.body.email } });

        if (userExists)
        {
            return res.status(404).json({ erro: 'Email já foi cadastrado' });;
        }
        
        const user = await User.create( req.body );

        return res.json( user );
    }


}

export default new UserController();