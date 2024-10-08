/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WelcomeImport } from './routes/welcome'
import { Route as LayoutRouteImport } from './routes/_layout/route'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutRulesImport } from './routes/_layout/rules'
import { Route as LayoutLoginImport } from './routes/_layout/login'
import { Route as LayoutprivateRouteImport } from './routes/_layout/(private)/route'
import { Route as LayoutCategoryIndexImport } from './routes/_layout/category/index'
import { Route as LayoutCategoryIdImport } from './routes/_layout/category/$id'
import { Route as LayoutprivateProfileImport } from './routes/_layout/(private)/profile'
import { Route as LayoutprivateNewWordImport } from './routes/_layout/(private)/new-word'
import { Route as LayoutprivateGameImport } from './routes/_layout/(private)/game'
import { Route as LayoutprivateFavoritesImport } from './routes/_layout/(private)/favorites'

// Create/Update Routes

const WelcomeRoute = WelcomeImport.update({
  path: '/welcome',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRouteRoute = LayoutRouteImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRulesRoute = LayoutRulesImport.update({
  path: '/rules',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const LayoutLoginRoute = LayoutLoginImport.update({
  path: '/login',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const LayoutprivateRouteRoute = LayoutprivateRouteImport.update({
  id: '/(private)',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const LayoutCategoryIndexRoute = LayoutCategoryIndexImport.update({
  path: '/category/',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const LayoutCategoryIdRoute = LayoutCategoryIdImport.update({
  path: '/category/$id',
  getParentRoute: () => LayoutRouteRoute,
} as any)

const LayoutprivateProfileRoute = LayoutprivateProfileImport.update({
  path: '/profile',
  getParentRoute: () => LayoutprivateRouteRoute,
} as any)

const LayoutprivateNewWordRoute = LayoutprivateNewWordImport.update({
  path: '/new-word',
  getParentRoute: () => LayoutprivateRouteRoute,
} as any)

const LayoutprivateGameRoute = LayoutprivateGameImport.update({
  path: '/game',
  getParentRoute: () => LayoutprivateRouteRoute,
} as any)

const LayoutprivateFavoritesRoute = LayoutprivateFavoritesImport.update({
  path: '/favorites',
  getParentRoute: () => LayoutprivateRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutRouteImport
      parentRoute: typeof rootRoute
    }
    '/welcome': {
      id: '/welcome'
      path: '/welcome'
      fullPath: '/welcome'
      preLoaderRoute: typeof WelcomeImport
      parentRoute: typeof rootRoute
    }
    '/_layout/(private)': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutprivateRouteImport
      parentRoute: typeof LayoutRouteRoute
    }
    '/_layout/login': {
      id: '/_layout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LayoutLoginImport
      parentRoute: typeof LayoutRouteImport
    }
    '/_layout/rules': {
      id: '/_layout/rules'
      path: '/rules'
      fullPath: '/rules'
      preLoaderRoute: typeof LayoutRulesImport
      parentRoute: typeof LayoutRouteImport
    }
    '/_layout/(private)/favorites': {
      id: '/_layout/favorites'
      path: '/favorites'
      fullPath: '/favorites'
      preLoaderRoute: typeof LayoutprivateFavoritesImport
      parentRoute: typeof LayoutprivateRouteImport
    }
    '/_layout/(private)/game': {
      id: '/_layout/game'
      path: '/game'
      fullPath: '/game'
      preLoaderRoute: typeof LayoutprivateGameImport
      parentRoute: typeof LayoutprivateRouteImport
    }
    '/_layout/(private)/new-word': {
      id: '/_layout/new-word'
      path: '/new-word'
      fullPath: '/new-word'
      preLoaderRoute: typeof LayoutprivateNewWordImport
      parentRoute: typeof LayoutprivateRouteImport
    }
    '/_layout/(private)/profile': {
      id: '/_layout/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof LayoutprivateProfileImport
      parentRoute: typeof LayoutprivateRouteImport
    }
    '/_layout/category/$id': {
      id: '/_layout/category/$id'
      path: '/category/$id'
      fullPath: '/category/$id'
      preLoaderRoute: typeof LayoutCategoryIdImport
      parentRoute: typeof LayoutRouteImport
    }
    '/_layout/category/': {
      id: '/_layout/category/'
      path: '/category'
      fullPath: '/category'
      preLoaderRoute: typeof LayoutCategoryIndexImport
      parentRoute: typeof LayoutRouteImport
    }
  }
}

// Create and export the route tree

interface LayoutprivateRouteRouteChildren {
  LayoutprivateFavoritesRoute: typeof LayoutprivateFavoritesRoute
  LayoutprivateGameRoute: typeof LayoutprivateGameRoute
  LayoutprivateNewWordRoute: typeof LayoutprivateNewWordRoute
  LayoutprivateProfileRoute: typeof LayoutprivateProfileRoute
}

const LayoutprivateRouteRouteChildren: LayoutprivateRouteRouteChildren = {
  LayoutprivateFavoritesRoute: LayoutprivateFavoritesRoute,
  LayoutprivateGameRoute: LayoutprivateGameRoute,
  LayoutprivateNewWordRoute: LayoutprivateNewWordRoute,
  LayoutprivateProfileRoute: LayoutprivateProfileRoute,
}

const LayoutprivateRouteRouteWithChildren =
  LayoutprivateRouteRoute._addFileChildren(LayoutprivateRouteRouteChildren)

interface LayoutRouteRouteChildren {
  LayoutprivateRouteRoute: typeof LayoutprivateRouteRouteWithChildren
  LayoutLoginRoute: typeof LayoutLoginRoute
  LayoutRulesRoute: typeof LayoutRulesRoute
  LayoutCategoryIdRoute: typeof LayoutCategoryIdRoute
  LayoutCategoryIndexRoute: typeof LayoutCategoryIndexRoute
}

const LayoutRouteRouteChildren: LayoutRouteRouteChildren = {
  LayoutprivateRouteRoute: LayoutprivateRouteRouteWithChildren,
  LayoutLoginRoute: LayoutLoginRoute,
  LayoutRulesRoute: LayoutRulesRoute,
  LayoutCategoryIdRoute: LayoutCategoryIdRoute,
  LayoutCategoryIndexRoute: LayoutCategoryIndexRoute,
}

const LayoutRouteRouteWithChildren = LayoutRouteRoute._addFileChildren(
  LayoutRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof LayoutprivateRouteRouteWithChildren
  '': typeof LayoutRouteRouteWithChildren
  '/welcome': typeof WelcomeRoute
  '/login': typeof LayoutLoginRoute
  '/rules': typeof LayoutRulesRoute
  '/favorites': typeof LayoutprivateFavoritesRoute
  '/game': typeof LayoutprivateGameRoute
  '/new-word': typeof LayoutprivateNewWordRoute
  '/profile': typeof LayoutprivateProfileRoute
  '/category/$id': typeof LayoutCategoryIdRoute
  '/category': typeof LayoutCategoryIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof LayoutprivateRouteRouteWithChildren
  '/welcome': typeof WelcomeRoute
  '/login': typeof LayoutLoginRoute
  '/rules': typeof LayoutRulesRoute
  '/favorites': typeof LayoutprivateFavoritesRoute
  '/game': typeof LayoutprivateGameRoute
  '/new-word': typeof LayoutprivateNewWordRoute
  '/profile': typeof LayoutprivateProfileRoute
  '/category/$id': typeof LayoutCategoryIdRoute
  '/category': typeof LayoutCategoryIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout': typeof LayoutRouteRouteWithChildren
  '/welcome': typeof WelcomeRoute
  '/_layout/': typeof LayoutprivateRouteRouteWithChildren
  '/_layout/login': typeof LayoutLoginRoute
  '/_layout/rules': typeof LayoutRulesRoute
  '/_layout/favorites': typeof LayoutprivateFavoritesRoute
  '/_layout/game': typeof LayoutprivateGameRoute
  '/_layout/new-word': typeof LayoutprivateNewWordRoute
  '/_layout/profile': typeof LayoutprivateProfileRoute
  '/_layout/category/$id': typeof LayoutCategoryIdRoute
  '/_layout/category/': typeof LayoutCategoryIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/welcome'
    | '/login'
    | '/rules'
    | '/favorites'
    | '/game'
    | '/new-word'
    | '/profile'
    | '/category/$id'
    | '/category'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/welcome'
    | '/login'
    | '/rules'
    | '/favorites'
    | '/game'
    | '/new-word'
    | '/profile'
    | '/category/$id'
    | '/category'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/welcome'
    | '/_layout/'
    | '/_layout/login'
    | '/_layout/rules'
    | '/_layout/favorites'
    | '/_layout/game'
    | '/_layout/new-word'
    | '/_layout/profile'
    | '/_layout/category/$id'
    | '/_layout/category/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutRouteRoute: typeof LayoutRouteRouteWithChildren
  WelcomeRoute: typeof WelcomeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutRouteRoute: LayoutRouteRouteWithChildren,
  WelcomeRoute: WelcomeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/welcome"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout/route.tsx",
      "children": [
        "/_layout/",
        "/_layout/login",
        "/_layout/rules",
        "/_layout/category/$id",
        "/_layout/category/"
      ]
    },
    "/welcome": {
      "filePath": "welcome.tsx"
    },
    "/_layout/": {
      "filePath": "_layout/(private)/route.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/favorites",
        "/_layout/game",
        "/_layout/new-word",
        "/_layout/profile"
      ]
    },
    "/_layout/login": {
      "filePath": "_layout/login.tsx",
      "parent": "/_layout"
    },
    "/_layout/rules": {
      "filePath": "_layout/rules.tsx",
      "parent": "/_layout"
    },
    "/_layout/favorites": {
      "filePath": "_layout/(private)/favorites.tsx",
      "parent": "/_layout/"
    },
    "/_layout/game": {
      "filePath": "_layout/(private)/game.tsx",
      "parent": "/_layout/"
    },
    "/_layout/new-word": {
      "filePath": "_layout/(private)/new-word.tsx",
      "parent": "/_layout/"
    },
    "/_layout/profile": {
      "filePath": "_layout/(private)/profile.tsx",
      "parent": "/_layout/"
    },
    "/_layout/category/$id": {
      "filePath": "_layout/category/$id.tsx",
      "parent": "/_layout"
    },
    "/_layout/category/": {
      "filePath": "_layout/category/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
