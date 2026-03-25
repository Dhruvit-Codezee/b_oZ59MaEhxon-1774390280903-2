/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ['next-mdx-remote'],

  // Cache headers for static assets - improves repeat visit performance
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.woff2',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  // 301 redirects for WordPress to Next.js migration
  // Add any URL structure changes here to protect SEO
  async redirects() {
    return [
      // WordPress to Next.js service URL redirects
      {
        source: '/services/airtable-partners',
        destination: '/services/system-data-integration',
        permanent: true,
      },
      {
        source: '/services/airtable-partners/',
        destination: '/services/system-data-integration',
        permanent: true,
      },
      {
        source: '/services/job-tracking',
        destination: '/services/operational-automation',
        permanent: true,
      },
      {
        source: '/services/job-tracking/',
        destination: '/services/operational-automation',
        permanent: true,
      },
      {
        source: '/services/ai-assistants',
        destination: '/services/ai-agents',
        permanent: true,
      },
      {
        source: '/services/ai-assistants/',
        destination: '/services/ai-agents',
        permanent: true,
      },
      {
        source: '/services/audits',
        destination: '/services/ai-readiness-assessment',
        permanent: true,
      },
      {
        source: '/services/audits/',
        destination: '/services/ai-readiness-assessment',
        permanent: true,
      },
      // Handle trailing slashes from WordPress
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      // Use-case redirects: legacy and renamed slugs
      // outbound-sales-teams consolidated into sales-marketing-automation
      {
        source: '/use-cases/outbound-sales',
        destination: '/use-cases/sales-marketing-automation',
        permanent: true,
      },
      {
        source: '/use-cases/outbound-sales/',
        destination: '/use-cases/sales-marketing-automation',
        permanent: true,
      },
      {
        source: '/use-cases/outbound-sales-teams',
        destination: '/use-cases/sales-marketing-automation',
        permanent: true,
      },
      {
        source: '/use-cases/outbound-sales-teams/',
        destination: '/use-cases/sales-marketing-automation',
        permanent: true,
      },
      {
        source: '/use-cases/it-automation',
        destination: '/use-cases/cybersecurity-automation',
        permanent: true,
      },
      {
        source: '/use-cases/legal-compliance-automation',
        destination: '/use-cases/legal-automation',
        permanent: true,
      },
      {
        source: '/use-cases/',
        destination: '/use-cases',
        permanent: true,
      },
      // WordPress blog URL 301 redirects
      // Old long-form slugs -> new shortened slugs
      {
        source: '/blog/ai-agents-explained-what-are-they-and-how-to-use-them-in-your-business',
        destination: '/blog/ai-agents-explained',
        permanent: true,
      },
      {
        source: '/blog/ai-agents-explained-what-are-they-and-how-to-use-them-in-your-business/',
        destination: '/blog/ai-agents-explained',
        permanent: true,
      },
      {
        source: '/blog/7-ways-msps-can-use-ai-to-strengthen-their-offering-in-2026',
        destination: '/blog/7-ways-msps-use-ai-2026',
        permanent: true,
      },
      {
        source: '/blog/7-ways-msps-can-use-ai-to-strengthen-their-offering-in-2026/',
        destination: '/blog/7-ways-msps-use-ai-2026',
        permanent: true,
      },
      {
        source: '/blog/assessing-ai-readiness-for-business-transformation-a-practical-ai-maturity-assessment-framework',
        destination: '/blog/ai-maturity-assessment-framework',
        permanent: true,
      },
      {
        source: '/blog/assessing-ai-readiness-for-business-transformation-a-practical-ai-maturity-assessment-framework/',
        destination: '/blog/ai-maturity-assessment-framework',
        permanent: true,
      },
      {
        source: '/blog/top-reasons-to-use-an-ai-automation-company-and-the-outcomes-to-expect',
        destination: '/blog/top-reasons-ai-automation-company',
        permanent: true,
      },
      {
        source: '/blog/top-reasons-to-use-an-ai-automation-company-and-the-outcomes-to-expect/',
        destination: '/blog/top-reasons-ai-automation-company',
        permanent: true,
      },
      {
        source: '/blog/sales-automation-real-life-tips-use-cases',
        destination: '/blog/sales-automation-tips-use-cases',
        permanent: true,
      },
      {
        source: '/blog/sales-automation-real-life-tips-use-cases/',
        destination: '/blog/sales-automation-tips-use-cases',
        permanent: true,
      },
      {
        source: '/blog/complete-guide-on-pipedrive-sales-automation',
        destination: '/blog/pipedrive-sales-automation-guide',
        permanent: true,
      },
      {
        source: '/blog/complete-guide-on-pipedrive-sales-automation/',
        destination: '/blog/pipedrive-sales-automation-guide',
        permanent: true,
      },
      {
        source: '/blog/why-need-marketing-automation-consultant',
        destination: '/blog/what-is-marketing-automation-consultant-why-need',
        permanent: true,
      },
      {
        source: '/blog/why-need-marketing-automation-consultant/',
        destination: '/blog/what-is-marketing-automation-consultant-why-need',
        permanent: true,
      },
      {
        source: '/blog/10-tips-to-improve-b2b-email-marketing',
        destination: '/blog/10-tips-improve-b2b-email-marketing',
        permanent: true,
      },
      {
        source: '/blog/10-tips-to-improve-b2b-email-marketing/',
        destination: '/blog/10-tips-improve-b2b-email-marketing',
        permanent: true,
      },
      {
        source: '/blog/sales-automation-essential-guide',
        destination: '/blog/sales-automation-the-essential-guide',
        permanent: true,
      },
      {
        source: '/blog/sales-automation-essential-guide/',
        destination: '/blog/sales-automation-the-essential-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-build-a-b2b-prospect-database',
        destination: '/blog/build-b2b-prospect-database',
        permanent: true,
      },
      {
        source: '/blog/how-to-build-a-b2b-prospect-database/',
        destination: '/blog/build-b2b-prospect-database',
        permanent: true,
      },
      {
        source: '/blog/buyer-intent-data-6-facts',
        destination: '/blog/what-is-buyer-intent-data-6-facts-you-need-to-know',
        permanent: true,
      },
      {
        source: '/blog/buyer-intent-data-6-facts/',
        destination: '/blog/what-is-buyer-intent-data-6-facts-you-need-to-know',
        permanent: true,
      },
      {
        source: '/blog/buyer-intent-data-increase-sales',
        destination: '/blog/5-ways-buyer-intent-data-can-increase-sales',
        permanent: true,
      },
      {
        source: '/blog/buyer-intent-data-increase-sales/',
        destination: '/blog/5-ways-buyer-intent-data-can-increase-sales',
        permanent: true,
      },
      {
        source: '/blog/how-to-leverage-intent-data-with-linkedin',
        destination: '/blog/leverage-intent-data-linkedin',
        permanent: true,
      },
      {
        source: '/blog/how-to-leverage-intent-data-with-linkedin/',
        destination: '/blog/leverage-intent-data-linkedin',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-workflow-automation',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-workflow-automation/',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-the-sales-document-tracking-and-signing-process-in-pipedrive',
        destination: '/blog/automate-sales-document-tracking-signing-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-the-sales-document-tracking-and-signing-process-in-pipedrive/',
        destination: '/blog/automate-sales-document-tracking-signing-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/automate-sales-document-tracking-pipedrive',
        destination: '/blog/automate-sales-document-tracking-signing-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/automate-sales-document-tracking-pipedrive/',
        destination: '/blog/automate-sales-document-tracking-signing-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-workflow-automation-templates',
        destination: '/blog/pipedrive-automation-workflow-templates',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-workflow-automation-templates/',
        destination: '/blog/pipedrive-automation-workflow-templates',
        permanent: true,
      },
      {
        source: '/blog/business-growth-automation-explained',
        destination: '/blog/what-is-business-growth-and-how-to-automate-it',
        permanent: true,
      },
      {
        source: '/blog/business-growth-automation-explained/',
        destination: '/blog/what-is-business-growth-and-how-to-automate-it',
        permanent: true,
      },
      {
        source: '/blog/b2b-marketing-automation-pipedrive',
        destination: '/blog/b2b-marketing-automation-with-pipedrive-crm',
        permanent: true,
      },
      {
        source: '/blog/b2b-marketing-automation-pipedrive/',
        destination: '/blog/b2b-marketing-automation-with-pipedrive-crm',
        permanent: true,
      },
      {
        source: '/blog/lead-generation-automation-strategy-for-pipedrive',
        destination: '/blog/lead-generation-automation-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/lead-generation-automation-strategy-for-pipedrive/',
        destination: '/blog/lead-generation-automation-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/top-pipedrive-integrations-automate-sales',
        destination: '/blog/pipedrive-integrations-for-sales-automation',
        permanent: true,
      },
      {
        source: '/blog/top-pipedrive-integrations-automate-sales/',
        destination: '/blog/pipedrive-integrations-for-sales-automation',
        permanent: true,
      },
      {
        source: '/blog/warehouse-management-automation-with-crm-full-guide',
        destination: '/blog/warehouse-management-automation-guide',
        permanent: true,
      },
      {
        source: '/blog/warehouse-management-automation-with-crm-full-guide/',
        destination: '/blog/warehouse-management-automation-guide',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-crm-review',
        destination: '/blog/pipedrive-crm-review-four-reasons-for-switching-to-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-crm-review/',
        destination: '/blog/pipedrive-crm-review-four-reasons-for-switching-to-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/how-to-set-up-automation-workflow-in-pipedrive-step-by-step',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/how-to-set-up-automation-workflow-in-pipedrive-step-by-step/',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/lead-scoring-b2b-sales-guide',
        destination: '/blog/what-is-lead-scoring-in-b2b-sales-a-beginners-guide',
        permanent: true,
      },
      {
        source: '/blog/lead-scoring-b2b-sales-guide/',
        destination: '/blog/what-is-lead-scoring-in-b2b-sales-a-beginners-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-customer-engagement-process-to-avoid-churn',
        destination: '/blog/automate-customer-engagement-avoid-churn',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-customer-engagement-process-to-avoid-churn/',
        destination: '/blog/automate-customer-engagement-avoid-churn',
        permanent: true,
      },
      {
        source: '/blog/sales-pipelines-guide',
        destination: '/blog/sales-pipelines-guide-for-sales-leaders-and-reps',
        permanent: true,
      },
      {
        source: '/blog/sales-pipelines-guide/',
        destination: '/blog/sales-pipelines-guide-for-sales-leaders-and-reps',
        permanent: true,
      },
      {
        source: '/blog/automated-pipedrive-workflows-for-accounting-finances',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/automated-pipedrive-workflows-for-accounting-finances/',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/automated-pipedrive-workflows-integrations-for-hr',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/automated-pipedrive-workflows-integrations-for-hr/',
        destination: '/blog/pipedrive-workflow-automation-setup',
        permanent: true,
      },
      {
        source: '/blog/what-is-a-sales-funnel-and-how-does-it-work',
        destination: '/blog/sales-pipelines-guide-for-sales-leaders-and-reps',
        permanent: true,
      },
      {
        source: '/blog/what-is-a-sales-funnel-and-how-does-it-work/',
        destination: '/blog/sales-pipelines-guide-for-sales-leaders-and-reps',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-sales-reporting-in-pipedrive',
        destination: '/blog/automate-sales-reporting-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/how-to-automate-sales-reporting-in-pipedrive/',
        destination: '/blog/automate-sales-reporting-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-automation-faq',
        destination: '/blog/pipedrive-workflow-automation',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-automation-faq/',
        destination: '/blog/pipedrive-workflow-automation',
        permanent: true,
      },
      {
        source: '/blog/automated-inventory-management-system-how-it-works-a-quick-guide',
        destination: '/blog/automated-inventory-management-guide',
        permanent: true,
      },
      {
        source: '/blog/automated-inventory-management-system-how-it-works-a-quick-guide/',
        destination: '/blog/automated-inventory-management-guide',
        permanent: true,
      },
      {
        source: '/blog/how-to-combine-sales-and-marketing-automation-with-pipedrive-crm',
        destination: '/blog/marketing-sales-automation-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/how-to-combine-sales-and-marketing-automation-with-pipedrive-crm/',
        destination: '/blog/marketing-sales-automation-pipedrive',
        permanent: true,
      },
      {
        source: '/blog/sales-forecasting-setup-guide',
        destination: '/blog/what-is-sales-forecasting-how-to-set-it-up',
        permanent: true,
      },
      {
        source: '/blog/sales-forecasting-setup-guide/',
        destination: '/blog/what-is-sales-forecasting-how-to-set-it-up',
        permanent: true,
      },
      {
        source: '/blog/customer-service-automation-pros-cons-best-practice-with-pipedrive',
        destination: '/blog/customer-service-automation-best-practices',
        permanent: true,
      },
      {
        source: '/blog/customer-service-automation-pros-cons-best-practice-with-pipedrive/',
        destination: '/blog/customer-service-automation-best-practices',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-integrations-for-marketing-automation',
        destination: '/blog/pipedrive-apps-marketing-automation',
        permanent: true,
      },
      {
        source: '/blog/pipedrive-integrations-for-marketing-automation/',
        destination: '/blog/pipedrive-apps-marketing-automation',
        permanent: true,
      },
      // Resource page redirects
      {
        source: '/guides',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/guides/',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/resources',
        destination: '/blog',
        permanent: false,
      },
      {
        source: '/resources/',
        destination: '/blog',
        permanent: false,
      },
    ]
  },
  // Ensure proper trailing slash handling
  trailingSlash: false,
}

export default nextConfig
