import { Request, Response } from 'express';
import {creatMenuObject} from '../helpers/CreateMenuObjects';
import { Pet } from '../models/pet';
import { sequelize } from '../instances/mysql';
import {User} from '../models/User';

export const home = async (req: Request, res: Response)=>{
let users = await User.findAll({where:{age: 18}});
console.log("Usuarios: " , JSON.stringify(users));


try{
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso");
}catch(error){
    console.log("Deu problema", error);
};


let list = Pet.getAll();

res.render('pages/page',{
    menu: creatMenuObject('all'),
  
    banner:{
        title: 'Todos os animais',
        background: 'allanimals.jpg'
    },
    list,
    users
    });

}
export const dogs = (req: Request, res: Response)=>{
    let list = Pet.getFromType('dog');
  
    res.render('pages/page',{

        menu: creatMenuObject('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'},

    list
        });
}
export const cats = (req: Request, res: Response)=>{
    let list = Pet.getFromType('cat');
    res.render('pages/page',{
        menu:creatMenuObject('cat'),
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'},

            list
    
        });
}
export const fishes = (req: Request, res: Response)=>{
    let list = Pet.getFromType('fish');
    res.render('pages/page',{

        menu:creatMenuObject('fish'),        
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'},
            list
    
        });
}