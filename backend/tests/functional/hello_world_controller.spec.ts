import { test } from '@japa/runner'

test.group('Hello world controller', () => {
  test('example test', async ({ client }) => {
    const response = await client.get('http://localhost:3333/')
    response.assertStatus(200)
    response.assertBody({ message: 'Hello you' })
  })
})
