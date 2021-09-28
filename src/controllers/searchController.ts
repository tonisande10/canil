import { Request, Response } from 'express';
import { send } from 'process';


export const search = (req: Request, res: Response)=>{
    res.send('antonio');

    //res.render('pages/page');
}