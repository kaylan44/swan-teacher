import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {imageType} from './imageType'
import {reviewType} from './reviewType'
import {longTextType} from './longTextType'
import {importantDataType} from './importantDataType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, imageType, reviewType, longTextType, importantDataType],
}
