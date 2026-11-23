export type Project = {
  id: number;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  repo: string;
  live?: string;
  status: 'Live' | 'Not Live' | 'Demo link unavailable';
  category: string;
  stack: string[];
  accent: string;
  mark: string;
  overview: string;
  challenge: string;
  approach: string;
  features: string[];
  screenshots: { src: string; alt: string; caption: string }[];
  screenshotNote?: string;
};

export const projects: Project[] = [
  {
    id: 1, slug: 'convertly', name: 'Convertly', subtitle: 'Smart file conversion', description: 'A web-based file workspace for converting, compressing and transforming everyday files.', repo: 'https://github.com/avicenna-enterprise/covertly-web.git', status: 'Not Live', category: 'Productivity', stack: ['React', 'Node.js', 'File Processing'], accent: 'from-cyan-500/25 to-blue-600/5', mark: 'CV',
    overview: 'Convertly brings common file utilities into one searchable workspace. The supplied interface presents a directory of tools, category filters and a focused upload experience for individual conversions.',
    challenge: 'People often need a specific file operation and have to search across separate utilities to find it. The product experience needs to make available tools easy to discover and each task easy to start.',
    approach: 'Organize the experience around a searchable tool directory, recognizable categories and a dedicated workspace for the selected operation. The screenshots show a clear upload area and a concise description of the chosen conversion.',
    features: ['Searchable directory of file tools', 'Category filters for PDF, media, documents and utility tasks', 'Dedicated tool page with a file-selection area', 'Clear privacy and processing context on the tool screen'],
    screenshots: [
      { src: '/projects/convertly-tools.png', alt: 'Convertly tools directory', caption: 'Tool discovery — searchable directory and category filters' },
      { src: '/projects/convertly-tool.png', alt: 'Convertly MP4 to MP3 tool screen', caption: 'Focused workflow — MP4 to MP3 upload screen' }
    ]
  },
  {
    id: 2, slug: 'ai-note-taker', name: 'AI Note Taker', subtitle: 'Meeting intelligence', description: 'A meeting workspace that turns recordings and transcripts into summaries, action items and useful follow-up material.', repo: 'https://github.com/avicenna-enterprise/note_taker_ai_extension.git', status: 'Not Live', category: 'AI & Tools', stack: ['JavaScript', 'AI', 'Browser Extension'], accent: 'from-fuchsia-500/25 to-violet-600/5', mark: 'AI',
    overview: 'AI Note Taker is presented as a companion for capturing meetings and working with their transcripts. The supplied screens show a workspace dashboard, a set of AI output actions and a detailed meeting view.',
    challenge: 'Meeting information can be difficult to revisit and turn into concrete next steps. A useful workspace should make the meeting record, generated notes and follow-up items accessible together.',
    approach: 'The interface groups meeting activity and recent sessions in a dashboard, then provides dedicated views for transcript-based outputs such as summaries, decisions and tasks.',
    features: ['Meeting workspace and recent-meeting list', 'Transcript and AI summary views', 'Action items, key decisions and next steps', 'Multiple output formats including short and detailed summaries', 'Meeting detail view with tabs for summary, transcript, tasks and notes'],
    screenshots: [
      { src: '/projects/ai-note-dashboard.png', alt: 'AI Note Taker dashboard', caption: 'Workspace overview — meeting activity and recent sessions' },
      { src: '/projects/ai-note-prompts.png', alt: 'AI Note Taker output choices', caption: 'AI actions — choose the type of meeting output to generate' },
      { src: '/projects/ai-note-detail.png', alt: 'AI Note Taker meeting detail', caption: 'Meeting detail — summary, transcript and action-oriented notes' }
    ]
  },
  {
    id: 3, slug: 'harvestfresh', name: 'HarvestFresh', subtitle: 'Fresh food, delivered', description: 'A premium fruits and vegetables shopping experience with a clean, customer-focused storefront.', repo: 'https://github.com/avicenna-enterprise/Harvest-Fresh---Premium-Fruits-Vegetables.git', status: 'Not Live', category: 'E-commerce', stack: ['React', 'E-commerce', 'Web UI'], accent: 'from-lime-500/25 to-emerald-600/5', mark: 'HF',
    overview: 'HarvestFresh is a fruits and vegetables e-commerce project. Its supplied project name and repository identify the product focus; no interface screenshots were included in this upload.',
    challenge: 'A fresh-produce storefront needs to present products and shopping information clearly so customers can browse and make purchase decisions.',
    approach: 'The project is positioned as a focused online shopping experience for fresh fruits and vegetables. Detailed implementation specifics should be added after reviewing the repository.',
    features: ['Fresh-produce storefront concept', 'Product browsing and e-commerce experience'], screenshots: [], screenshotNote: 'No screenshots were supplied for this project yet.'
  },
  {
    id: 4, slug: 'post-scheduler', name: 'POST Scheduler', subtitle: 'Social media workflow', description: 'A social media publishing workspace for composing posts, connecting channels and organizing scheduled content.', repo: 'https://github.com/avicenna-enterprise/social-media-handler.git', status: 'Not Live', category: 'Productivity', stack: ['React', 'Node.js', 'Social Media'], accent: 'from-orange-500/25 to-rose-600/5', mark: 'PS',
    overview: 'POST Scheduler is a social media handling interface. The screenshots show a post composer, a preview panel, event-topic suggestions and a channel connection screen.',
    challenge: 'Preparing social posts involves composing content, selecting publishing destinations and managing connected social accounts. These steps benefit from a single, understandable workflow.',
    approach: 'The interface separates the main publishing workflow into navigation areas for creating posts, scheduled content and channels. The composer places publishing options beside a post preview.',
    features: ['Post composition workspace with preview', 'Channel connection area', 'Scheduled-post navigation', 'Event-based post topic selection', 'Business post topic and AI suggestion entry points'],
    screenshots: [
      { src: '/projects/post-scheduler-create.png', alt: 'POST Scheduler create post screen', caption: 'Post composer — destination, event topics and live preview areas' },
      { src: '/projects/post-scheduler-channels.png', alt: 'POST Scheduler channels screen', caption: 'Channel setup — connect social accounts before publishing' }
    ]
  },
  {
    id: 5, slug: 'video-downloader', name: 'Video Downloader', subtitle: 'Download management', description: 'A browser-based download manager interface for handling video download tasks and conversion workflows.', repo: 'https://github.com/avicenna-enterprise/download-manager-webapp.git', status: 'Demo link unavailable', category: 'Media', stack: ['React', 'Web App', 'Media'], accent: 'from-red-500/25 to-orange-600/5', mark: 'VD',
    overview: 'Video Downloader is represented by the supplied download-manager repository. No live demo URL or screenshots were provided for this project.',
    challenge: 'A download utility should make the task flow understandable, from providing a source to managing the resulting file.',
    approach: 'The project is listed as a media/download-management product. Further technical and feature details should be confirmed from the repository rather than assumed.',
    features: ['Download-manager project', 'Media-focused web application'], screenshots: [], screenshotNote: 'No screenshots were supplied for this project yet.'
  },
  {
    id: 6, slug: 'custom-hauling', name: 'Custom Hauling', subtitle: 'Hauling services online', description: 'A live website for a custom hauling service, presenting its offering through a focused business website.', repo: 'https://github.com/avicenna-enterprise/custom_hauling.git', live: 'https://custom-hauling.vercel.app/', status: 'Live', category: 'Business', stack: ['Next.js', 'Web Design', 'Vercel'], accent: 'from-amber-500/25 to-yellow-600/5', mark: 'CH',
    overview: 'Custom Hauling is a live business website for a hauling service. This portfolio entry links directly to the deployed website and source repository.',
    challenge: 'A service business needs a clear online presence that explains what it offers and gives visitors a straightforward path to make contact.',
    approach: 'The project is presented as a focused service-business website. More detailed feature claims can be added after reviewing the live site and repository.',
    features: ['Dedicated website for a hauling service', 'Live deployment available', 'Source repository linked'], screenshots: [], screenshotNote: 'Add screenshots of the live website to complete this case study.'
  },
  {
    id: 7, slug: 'qr-studio', name: 'QR Studio · Luma Link', subtitle: 'QR codes and link analytics', description: 'A QR and link management workspace with saved codes, dynamic destinations and usage analytics.', repo: 'https://github.com/avicenna-enterprise/qr-studio.git', live: 'https://qr-studio-xi-three.vercel.app/', status: 'Live', category: 'AI & Tools', stack: ['React', 'QR Codes', 'Dashboard'], accent: 'from-violet-500/25 to-indigo-600/5', mark: 'QR',
    overview: 'QR Studio (branded LumaLink in the supplied screens) provides a dashboard for QR codes and short links. The screenshots show an overview, a saved QR code library and recent activity/device analytics.',
    challenge: 'Creating QR codes is only part of the workflow; users also need a place to manage saved codes and understand how links are being used.',
    approach: 'The product brings QR creation, saved-code management and analytics into a single dashboard experience with summary metrics, filters and activity views.',
    features: ['QR code creation entry point', 'Saved QR code library with search and filters', 'Dynamic QR code status and scan counts', 'Overview dashboard for clicks, scans and active links', 'Recent activity and device breakdowns'],
    screenshots: [
      { src: '/projects/qr-studio-dashboard.png', alt: 'LumaLink analytics dashboard', caption: 'Analytics overview — clicks, scans, active links and top performers' },
      { src: '/projects/qr-studio-library.png', alt: 'LumaLink QR code library', caption: 'QR library — manage saved codes, statuses and scan counts' },
      { src: '/projects/qr-studio-activity.png', alt: 'LumaLink recent activity and device overview', caption: 'Usage insights — recent activity and device breakdown' }
    ]
  },
  {
    id: 8, slug: 'roman2urdu', name: 'Roman2Urdu', subtitle: 'Urdu made accessible', description: 'An Urdu language platform with Roman Urdu conversion, Urdu-to-Roman conversion, names and word-meaning resources.', repo: 'https://github.com/avicenna-enterprise/roman2urdu.git', live: 'https://roman2urdu.vercel.app/', status: 'Live', category: 'Education', stack: ['React', 'Urdu', 'Language Tools'], accent: 'from-emerald-500/25 to-teal-600/5', mark: 'ر2',
    overview: 'Roman2Urdu is a live language utility website. The supplied screens show its landing page and a live Roman Urdu-to-Urdu converter interface.',
    challenge: 'Typing Urdu script can be inconvenient for people who naturally type in Roman Urdu. A focused conversion tool can reduce that friction and make Urdu text easier to produce.',
    approach: 'The website presents a direct conversion workflow, with input and output panels side by side, direction switching and example phrases to help users get started.',
    features: ['Roman Urdu to Urdu conversion', 'Urdu to Roman Urdu navigation', 'Side-by-side input and output panels', 'Example phrases for quick testing', 'Names, word meanings and poetry-related sections in the site navigation'],
    screenshots: [
      { src: '/projects/roman2urdu-home.png', alt: 'Roman2Urdu landing page', caption: 'Landing page — introduce the language tools and conversion workflow' },
      { src: '/projects/roman2urdu-converter.png', alt: 'Roman2Urdu live converter', caption: 'Converter — type Roman Urdu and view Urdu script output' }
    ]
  },
  {
    id: 9, slug: 'searchnow', name: 'SearchNow', subtitle: 'Discover GitHub profiles', description: 'A GitHub profile finder that makes it easier to search for developer profiles and explore public information.', repo: 'https://github.com/avicenna-enterprise/github-profile-finder.git', live: 'https://searchnow-phi.vercel.app/', status: 'Live', category: 'Developer Tools', stack: ['React', 'GitHub API', 'API Integration'], accent: 'from-sky-500/25 to-indigo-600/5', mark: 'SN',
    overview: 'SearchNow is a GitHub developer intelligence dashboard for looking up public profiles and exploring repository, activity and language information.',
    challenge: 'Finding a developer profile by username should be quick and should present public profile information in a readable way.',
    approach: 'The workspace combines a username search with a developer overview, repository summaries, language distribution and recently updated repository lists. The supplied screenshots show the sample-preview state; the interface prompts users to search to fetch live GitHub API data.',
    features: ['GitHub username search', 'Developer overview with public profile details', 'Public repository, star and fork summaries', 'Repository language distribution', 'Popular and recently updated repositories', 'Repository, activity, compare and saved-profile navigation', 'Export overview to PDF'],
    screenshots: [
      { src: '/projects/searchnow-overview.png', alt: 'SearchNow developer overview dashboard with GitHub username search and profile summary', caption: 'Developer overview — search a GitHub username and review the public profile summary' },
      { src: '/projects/searchnow-repositories.png', alt: 'SearchNow language distribution, popular repositories and recently updated repositories', caption: 'Repository insights — language distribution, popular projects and recent updates' }
    ]
  },
  {
    id: 10, slug: 'calculyt', name: 'Calculyt', subtitle: 'Calculations, made clear', description: 'A calculator platform bringing useful online calculators together in one searchable, category-based experience.', repo: 'https://github.com/avicenna-enterprise/calculaters-webapp.git', live: 'https://calculyt.vercel.app/', status: 'Live', category: 'Education', stack: ['Next.js', 'TypeScript', 'Charts'], accent: 'from-purple-500/30 to-pink-600/5', mark: 'Cy',
    overview: 'Calculyt is a live calculator platform. The supplied screens show its homepage, category directory and popular calculator cards, including a featured compound-growth visualization.',
    challenge: 'People need calculators for different everyday decisions, but finding the right tool and understanding its result can take unnecessary effort.',
    approach: 'Calculyt organizes tools into categories, highlights popular calculators and provides a search-oriented discovery experience. The homepage also uses a featured compound-growth preview to make the value of a calculator tangible.',
    features: ['Calculator directory organized by category', 'Search and browse entry points', 'Popular calculator shortcuts', 'Financial, health and fitness, math and other categories', 'Featured compound-growth visualization'],
    screenshots: [
      { src: '/projects/calculyt-home.png', alt: 'Calculyt homepage with compound growth feature', caption: 'Homepage — featured compound-growth calculator and primary navigation' },
      { src: '/projects/calculyt-categories.png', alt: 'Calculyt categories and popular calculators', caption: 'Discovery — category cards and popular calculator shortcuts' }
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
