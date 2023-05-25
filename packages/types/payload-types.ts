/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page
    categories: Category
    posts: Post
    tags: Tag
    users: User
    media: Media
    sdg: Sdg
  }
  globals: {
    company: Company
    'main-menu': MainMenu
  }
}
export interface Page {
  id: string
  title: string
  layout: (
    | {
        fullWidth?: boolean
        horizontalPadding?: boolean
        topPadding?: boolean
        bottomPadding?: boolean
        featuredPost?: string | Post
        title?: string
        description?: string
        primaryAction: {
          type?: 'reference' | 'custom'
          reference: {
            value: string | Page
            relationTo: 'pages'
          }
          url: string
          label: string
        }
        secondaryAction: {
          type?: 'reference' | 'custom'
          reference: {
            value: string | Page
            relationTo: 'pages'
          }
          url: string
          label: string
        }
        id?: string
        blockName?: string
        blockType: 'hero'
      }
    | {
        fullWidth?: boolean
        horizontalPadding?: boolean
        topPadding?: boolean
        bottomPadding?: boolean
        title?: string
        description?: string
        id?: string
        blockName?: string
        blockType: 'headerSection'
      }
    | {
        fullWidth?: boolean
        horizontalPadding?: boolean
        topPadding?: boolean
        bottomPadding?: boolean
        show?: '3' | '6' | '9'
        id?: string
        blockName?: string
        blockType: 'blogSection'
      }
  )[]
  slug?: string
  updatedAt: string
  createdAt: string
  _status?: 'draft' | 'published'
}
export interface Post {
  id: string
  slug?: string
  title?: string
  author?: string | User
  publishedDate?: string
  image?: string | Media
  tags?: string[] | Tag[]
  SDGs?: string[] | Sdg[]
  content?: {
    [k: string]: unknown
  }[]
  updatedAt: string
  createdAt: string
  _status?: 'draft' | 'published'
}
export interface User {
  id: string
  slug?: string
  name?: string
  avatar: string | Media
  updatedAt: string
  createdAt: string
  email?: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  loginAttempts?: number
  lockUntil?: string
  password?: string
}
export interface Media {
  id: string
  alt: string
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
  sizes?: {
    card?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
    feature?: {
      url?: string
      width?: number
      height?: number
      mimeType?: string
      filesize?: number
      filename?: string
    }
  }
}
export interface Tag {
  id: string
  slug?: string
  name?: string
}
export interface Sdg {
  id: string
  slug?: string
  name: string
  image?: string | Media
}
export interface Category {
  id: string
  name?: string
}
export interface Company {
  id: string
  name?: string
  logo?: string | Media
}
export interface MainMenu {
  id: string
  navItems: {
    link: {
      type?: 'reference' | 'custom'
      reference: {
        value: string | Page
        relationTo: 'pages'
      }
      url: string
      label: string
    }
    id?: string
  }[]
}
