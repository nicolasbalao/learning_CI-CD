import type { HttpContext } from '@adonisjs/core/http'

export default class HelloWorldsController {
  public async index({ response }: HttpContext) {
    return response.json({ message: 'Hello World' })
  }
}
