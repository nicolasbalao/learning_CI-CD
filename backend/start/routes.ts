/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import HelloWorldsController from '../app/controllers/hello_worlds_controller.js'

router.get('/', [HelloWorldsController, 'index'])
