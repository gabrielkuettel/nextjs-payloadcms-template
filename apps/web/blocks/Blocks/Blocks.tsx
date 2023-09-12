import React from 'react'
import { Page, HeaderSectionBlock, HeroBlock, BlogSectionBlock } from 'types'

import { toKebabCase } from '@/utils/toKebabCase'
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
}> = ({ blocks }) => {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) {
    return null
  }

  return (
    <>
      {blocks.map((block, index) => {
        const { blockName, blockType, id } = block

        if (!blockType || !(blockType in blockComponents) || !id) {
          return null
        }

        const Block = blockComponents[blockType]

        return <Block id={toKebabCase(blockName || id)} {...block} key={id} />
      })}
    </>
  )
}
