import React, { Fragment } from 'react'
import { Page, HeaderSectionBlock, HeroBlock, BlogSectionBlock } from 'types'

import { toKebabCase } from '@/utilities/toKebabCase'
import { Hero } from '@/blocks/Hero'
import { HeaderSection } from '@/blocks/HeaderSection'
import { BlogSection } from '@/blocks/BlogSection'

type BlockTypes =
  | HeaderSectionBlock['blockType']
  | HeroBlock['blockType']
  | BlogSectionBlock['blockType']

type BlockComponents = {
  [key in BlockTypes]: (
    ...args: any
  ) => React.ReactNode | Promise<React.ReactNode>
}

const blockComponents: BlockComponents = {
  hero: Hero,
  blogSection: BlogSection,
  headerSection: HeaderSection
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
            // @ts-expect-error Async Server Component
            return <Block id={toKebabCase(id || blockName)} {...block} />
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
