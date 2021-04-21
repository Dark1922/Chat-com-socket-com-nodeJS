import {Request, Response} from 'express'

import { SettigsService } from '../services/SettingsService';

//ele vai pegar todo código que tem dentro do routes.ts e por aqui
class SettignsController {
async create(request: Request, response:Response) {
  const {chat, username} = request.body;

const settingsService = new  SettigsService();
try {//passo aqui sucesso ao criar usuario

const settings = await  settingsService.create({
  chat,
  username
})
 return response.json(settings);
}catch(err) {//passo aqui error ao criar usuario
  return response.status(400).json({//error 400 que da pra tratar ns aplicação
  message: err.message
  })
}

}
}
export {SettignsController}
