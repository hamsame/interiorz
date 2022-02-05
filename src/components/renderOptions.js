// render options to parse contenful data
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
export const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log(node.data.target.fields)
      return (
        <img
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.description}
          height='50%'
          width='50%'
          style={{ margin: '3vh auto' }}
        />
      )
    },
  },
}
