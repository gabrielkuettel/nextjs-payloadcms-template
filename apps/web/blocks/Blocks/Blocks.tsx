import React, { Fragment } from 'react'
import { Page } from 'types'

import { toKebabCase } from '@/utilities/toKebabCase'
import { BlogSection } from '@/blocks/BlogSection'

type BlockComponents = {
  [key in Page['layout'][0]['blockType']]: (
    ...args: any
  ) => React.JSX.Element | Promise<React.JSX.Element | null> | null
}

const blockComponents: BlockComponents = {
  blogSection: BlogSection
}

export const Blocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType, id } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            // @ts-expect-error Async Server Component */
            return <Block id={toKebabCase(id || blockName)} {...block} />
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
