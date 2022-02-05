// render options to parse contenful data
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

export const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      const baseInfo = node.data.target
      if (node.nodeType === 'embedded-entry-inline') {
        return (
          <a
            href={`/blog/${baseInfo.fields.slug}-${baseInfo.sys.id}`}
            title={baseInfo.fields.title}
          >
            {baseInfo.fields.title}
          </a>
        )
      }
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      if (node.nodeType === 'entry-hyperlink') {
        const baseInfo = node.data.target
        return (
          <a
            href={`/blog/${baseInfo.fields.slug}-${baseInfo.sys.id}`}
            title={baseInfo.fields.title}
          >
            {node.content[0].value}
          </a>
        )
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const baseInfo = node.data.target
      if (baseInfo.sys.contentType.sys.id === 'codeBlock') {
        return (
          <pre>
            <code>{baseInfo.fields.code}</code>
          </pre>
        )
      } else if (node.nodeType === 'embedded-entry-block') {
        return (
          <div>
            <h2>
              <a
                href={`/blog/${baseInfo.fields.slug}`}
                title={baseInfo.fields.title}
              >
                {baseInfo.fields.title}
              </a>
            </h2>
          </div>
        )
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const baseInfo = node.data.target
      if (baseInfo.fields.file.contentType === 'video/mp4') {
        return (
          <>
            <label htmlFor='articleVideo'></label>
            <video
              width='50%'
              controls
              id='articleVideo'
              name='articleVideo'
              alt={baseInfo.fields.file.description}
            >
              <source src={baseInfo.fields.file.url} type='video/mp4' />
            </video>
          </>
        )
      } else if (baseInfo.fields.file.contentType === 'image/jpeg') {
        return (
          <img
            src={`https://${baseInfo.fields.file.url}`}
            width='50%'
            alt={baseInfo.fields.description}
          />
        )
      }
    },
  },
}
