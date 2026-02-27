import { type SchemaTypeDefinition } from 'sanity'
import { landingPageSchemas } from './landingPage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...landingPageSchemas,
  ],
}
