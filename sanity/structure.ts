import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('imageType').title('Images'),
      S.documentTypeListItem('review').title('Reviews'),
      S.documentTypeListItem('longText').title('Long Texts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['imageType', 'review', 'longText'].includes(item.getId()!),
      ),
    ])
