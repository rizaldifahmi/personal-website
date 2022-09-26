import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default createConfig({
  name: 'default',
  title: 'Portfolio',
  projectId: '54r52h3d',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string'
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
          },
          {
            name: 'date',
            title: 'Date',
            type: 'datetime'
          }
        ]
      },
      {
        name: 'snippet',
        type: 'document',
        title: 'Snippet',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string'
          },
          {
            name: 'logo',
            title: 'Logo',
            type: 'image'
          }
        ]
      }
    ]
  }
});
