import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'bezlad-admin',

  projectId: 'f4ktdtvf',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Послуги')
              .schemaType('service')
              .child(
                S.documentList()
                  .title('Послуги')
                  .filter('_type == "service"')
                  .defaultOrdering([
                    {field: 'title', direction: 'asc'},
                    {field: '_updatedAt', direction: 'desc'},
                  ]),
              ),
            S.listItem()
              .title('Галерея')
              .schemaType('gallery')
              .child(
                S.documentList()
                  .title('Галерея')
                  .filter('_type == "gallery"')
                  .defaultOrdering([{field: '_updatedAt', direction: 'desc'}]),
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
