import { defineMiddleware } from 'astro:middleware'
import { redirectToDefaultLocale } from 'astro:i18n'
import { locales } from '../astro.config.mjs'

export const onRequest = defineMiddleware(async (ctx, next) => {
  const pathLocale = ctx.url.pathname.split('/')[1]
  if (pathLocale) {
    if (locales.includes(pathLocale)) {
      return next()
    }

    return redirectToDefaultLocale(ctx)
  }

  if (locales.includes(ctx.preferredLocale)) {
    return ctx.redirect(ctx.preferredLocale)
  }

  return redirectToDefaultLocale(ctx)
})
