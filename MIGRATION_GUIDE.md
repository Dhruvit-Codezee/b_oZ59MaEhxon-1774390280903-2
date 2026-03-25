# WordPress to Vercel Migration Guide for Automaly.io

This guide will help you migrate from WordPress to Next.js on Vercel while protecting your domain authority.

## Pre-Migration Checklist

### 1. Audit Your Current WordPress Site
- [ ] Export all content (posts, pages, media)
- [ ] Document all URLs and their structures
- [ ] Export SEO metadata (titles, descriptions, keywords)
- [ ] Save all custom fields and metadata
- [ ] Export images and media files
- [ ] Document any WordPress plugins affecting SEO (Yoast, Rank Math, etc.)

### 2. Crawl Your Site
Use tools like Screaming Frog or Sitebulb to:
- [ ] Create a complete URL inventory
- [ ] Document all meta tags and structured data
- [ ] Identify all internal links
- [ ] Check for broken links
- [ ] Export all redirects currently in place

## Migration Strategy (RECOMMENDED: Incremental)

### Option A: Incremental Migration (Safest)
This approach minimizes risk and allows gradual transition:

1. **Set up Next.js on Vercel staging domain**
   - Deploy this Next.js site to Vercel
   - Test thoroughly on `yourproject.vercel.app`

2. **Use Vercel's Incremental Migration**
   - Configure Vercel to proxy some routes to WordPress
   - Migrate pages one section at a time
   - Monitor analytics and search console

3. **Gradual DNS Cutover**
   - Start with homepage
   - Then services pages
   - Then blog (IMPORTANT: keep at /blog/ not blog subdomain)
   - Finally, remaining pages

### Option B: Full Cutover (Faster but Riskier)
1. Complete all development on staging
2. Test everything thoroughly
3. Update DNS all at once
4. Monitor closely for 72 hours

## DNS Configuration

### Steps to Point Domain to Vercel:

1. **In Vercel Dashboard:**
   - Add `automaly.io` as a custom domain
   - Vercel will provide DNS records

2. **In Your DNS Provider (GoDaddy/Cloudflare/etc):**
   - Update A record to point to Vercel's IP: `76.76.21.21`
   - Or add CNAME record: `cname.vercel-dns.com`
   - Keep your MX records for email unchanged

3. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - No action needed - it handles Let's Encrypt

## SEO Protection Steps

### 1. Maintain URL Structure
- Keep all URLs identical to WordPress
- Blog posts at `/blog/post-slug`
- Pages at `/page-slug`
- No changes = no SEO impact

### 2. Set Up 301 Redirects (If URLs Changed)
Edit `next.config.mjs` to add redirects:

```javascript
async redirects() {
  return [
    {
      source: '/old-path',
      destination: '/new-path',
      permanent: true, // 301 redirect
    },
  ]
}
```

### 3. Transfer Meta Tags
For each page, ensure you have:
- Title tags (handled in layout.tsx metadata)
- Meta descriptions
- Open Graph tags
- Twitter cards
- Canonical URLs

### 4. Schema Markup
If WordPress had structured data (JSON-LD), replicate it in Next.js:
- Organization schema
- Article schema for blog posts
- FAQ schema
- Breadcrumb schema

### 5. XML Sitemap
- Sitemap is automatically generated at `/sitemap.xml`
- Submit new sitemap to Google Search Console
- Keep monitoring in GSC for any crawl errors

### 6. Robots.txt
- Configured at `/robots.txt`
- Maintains same rules as WordPress

### 7. Internal Links
- Audit all internal links
- Ensure they point to correct new structure
- Update navigation menus

## Post-Migration Monitoring

### Week 1: Daily Checks
- [ ] Monitor Google Search Console for errors
- [ ] Check Analytics for traffic drops
- [ ] Test all forms and CTAs
- [ ] Verify all redirects working
- [ ] Check Core Web Vitals

### Week 2-4: Weekly Checks
- [ ] Monitor ranking changes in GSC
- [ ] Check for 404 errors
- [ ] Monitor page speed scores
- [ ] Verify all integrations working

### Month 2-3: Ongoing
- [ ] Continue monitoring search rankings
- [ ] Track organic traffic trends
- [ ] Fix any discovered issues
- [ ] Update sitemap if content changes

## Vercel-Specific Settings

### Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:
- Any API keys
- CRM integration tokens
- Analytics tracking IDs
- Form submission endpoints

### Performance Optimization
Vercel automatically handles:
- ✅ Edge CDN distribution
- ✅ Automatic image optimization
- ✅ Code splitting
- ✅ Server-side rendering
- ✅ Static generation

## Blog Migration

### Critical: Keep Blog on Subfolder
- ❌ DON'T use `blog.automaly.io`
- ✅ DO use `automaly.io/blog/`

Subdomains are treated as separate sites by Google, which dilutes domain authority.

### Options for Blog Content:

1. **Headless WordPress** (easiest transition)
   - Keep WordPress as CMS
   - Use Next.js for frontend
   - Connect via WordPress REST API

2. **Full Migration to Markdown/MDX**
   - Export WordPress posts to MDX files
   - Use Next.js app router for blog
   - Full control, no WordPress dependency

3. **Use a Headless CMS**
   - Migrate to Contentful, Sanity, or Strapi
   - Modern editing experience
   - API-first approach

## Rollback Plan

If issues occur, you can quickly rollback:

1. **DNS Rollback:**
   - Change DNS back to WordPress host
   - TTL should be set to 300 (5 min) during migration

2. **Vercel Deployment Rollback:**
   - Use Vercel dashboard to rollback to previous deployment
   - Instant rollback with one click

## Additional Resources

- [Vercel Migration Docs](https://vercel.com/docs/incremental-migration)
- [Next.js SEO Best Practices](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central - Site Moves](https://developers.google.com/search/docs/advanced/crawling/site-move-with-url-changes)

## Support Checklist

Before going live:
- [ ] Backup entire WordPress site
- [ ] Export WordPress database
- [ ] Test all forms submit correctly
- [ ] Verify analytics tracking
- [ ] Test on mobile devices
- [ ] Check cross-browser compatibility
- [ ] Set up monitoring alerts
- [ ] Prepare rollback plan

## Timeline Recommendation

- **Week 1:** Complete Next.js development
- **Week 2:** Testing and QA on staging
- **Week 3:** Content migration and SEO setup
- **Week 4:** Soft launch with incremental migration
- **Week 5-6:** Monitor and optimize
- **Week 7:** Full cutover if incremental

## Questions?

Deploy to Vercel staging first, test thoroughly, then proceed with DNS changes. The key to protecting domain authority is maintaining URL structure and proper redirects.
