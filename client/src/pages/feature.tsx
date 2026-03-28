import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/golf_junkies_transparent_1769769504384.png";
import groupsCommunitiesImage from "@/assets/images/feature-groups-communities.png";
import memberCommunicationImage from "@/assets/images/feature-member-communication.png";
import eventsCompetitionsImage from "@/assets/images/feature-events-competitions.png";
import reciprocalPlayImage from "@/assets/images/feature-reciprocal-play.png";
import contentPublishingImage from "@/assets/images/feature-content-publishing.png";
import analyticsReportingImage from "@/assets/images/feature-analytics-reporting.png";
import { Link, useParams } from "wouter";
import { 
  Users, 
  Calendar, 
  MessageCircle, 
  Globe, 
  FileText, 
  TrendingUp,
  CheckCircle,
  ArrowLeft,
  ArrowRight
} from "lucide-react";

const featuresData = {
  "member-communication": {
    icon: MessageCircle,
    title: "Member Communication & Social Networking",
    subtitle: "Connect your golf community like never before",
    description: "Enable members to connect, message, comment, post, and compete inside a private golf community network.",
    heroDescription: "Create a thriving online space where your golf community members can engage, share experiences, and build lasting connections. Our social networking features are designed specifically for golf enthusiasts.",
    benefits: [
      "Private messaging between members",
      "Community feed with posts and comments",
      "Member profiles with golf stats and achievements",
      "Photo and video sharing from rounds",
      "Notifications for community activity",
      "Member directories with search and filters"
    ],
    useCases: [
      "Share highlights from your latest round",
      "Discuss course conditions and tips",
      "Organize impromptu games with nearby members",
      "Celebrate member achievements and milestones"
    ],
    colorClass: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
    image: memberCommunicationImage
  },
  "groups-communities": {
    icon: Users,
    title: "Groups & Communities",
    subtitle: "Organize members into focused communities",
    description: "Create regional groups, interest-based groups, trip groups, and societies so members can easily organise away days, golf trips, and regular games.",
    heroDescription: "Build sub-communities within your platform that bring together members with shared interests, locations, or playing preferences. From local societies to trip planning groups, organize your community effectively.",
    benefits: [
      "Create unlimited groups and sub-communities",
      "Public and private group options",
      "Group-specific events and discussions",
      "Member management and admin controls",
      "Group calendars and scheduling",
      "Trip planning and coordination tools"
    ],
    useCases: [
      "Regional golf societies with local events",
      "Golf trip planning groups for away days",
      "Skill-based groups (beginners, seniors, etc.)",
      "Special interest groups (course reviewers, equipment enthusiasts)"
    ],
    colorClass: "bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400",
    image: groupsCommunitiesImage
  },
  "events-competitions": {
    icon: Calendar,
    title: "Events & Golf Competition Management",
    subtitle: "Run professional tournaments with ease",
    description: "Create and manage meet-ups, leagues, knockout tournaments, team competitions, and practice sessions with ease.",
    heroDescription: "From casual meet-ups to full-scale tournaments, our comprehensive event management system handles everything. Automated scoring, handicap integration, and real-time leaderboards make running competitions effortless.",
    benefits: [
      "Multiple competition formats (stroke, stableford, matchplay)",
      "Automated handicap calculations",
      "Real-time leaderboards and results",
      "Online registration and payment",
      "Tee time allocation and scheduling",
      "Prize management and announcements"
    ],
    useCases: [
      "Monthly medal competitions",
      "Annual club championships",
      "Inter-club team matches",
      "Charity golf days and fundraisers"
    ],
    colorClass: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
    image: eventsCompetitionsImage
  },
  "reciprocal-play": {
    icon: Globe,
    title: "Tee Time Offers & Reciprocal Play",
    subtitle: "Expand your golfing horizons",
    description: "Allow members to offer tee times or request reciprocal play at other clubs and regions. Discover new courses and meet new golfers effortlessly.",
    heroDescription: "Break down barriers between golf communities. Our reciprocal play system connects clubs and members, enabling exclusive access to courses across the network. Offer your spare tee times or discover new playing opportunities.",
    benefits: [
      "Tee time marketplace for spare slots",
      "Reciprocal play requests between clubs",
      "Course discovery and reviews",
      "Booking management and confirmations",
      "Guest policies and access controls",
      "Cross-community member connections"
    ],
    useCases: [
      "Fill spare tee times with visiting golfers",
      "Access partner clubs with reciprocal agreements",
      "Plan golf trips with guaranteed tee times",
      "Connect with golfers from other regions"
    ],
    colorClass: "bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400",
    image: reciprocalPlayImage
  },
  "content-publishing": {
    icon: FileText,
    title: "Golf Content Publishing & Insights",
    subtitle: "Share knowledge and grow engagement",
    description: "Share news, articles, coaching tips, and community updates. Track engagement and allow members to publish articles or opinion pieces.",
    heroDescription: "Build a rich content library that keeps members coming back. From coaching tips to course reviews, enable your community to create and consume valuable golf content while tracking what resonates most.",
    benefits: [
      "Rich text editor for articles and posts",
      "Coaching tips and video tutorials",
      "Course reviews and ratings",
      "News and announcements",
      "Member-generated content",
      "Content engagement analytics"
    ],
    useCases: [
      "Weekly newsletter with club updates",
      "Pro tips from your teaching professionals",
      "Member course reviews after away days",
      "Equipment reviews and recommendations"
    ],
    colorClass: "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400",
    image: contentPublishingImage
  },
  "analytics-reporting": {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    subtitle: "Data-driven community management",
    description: "Monitor member activity, event participation, and community growth with detailed analytics and insights.",
    heroDescription: "Understand your community with powerful analytics. Track engagement, measure growth, and identify trends to make informed decisions about your golf community's future.",
    benefits: [
      "Member engagement metrics",
      "Event participation tracking",
      "Growth and retention analytics",
      "Content performance insights",
      "Revenue and financial reporting",
      "Custom report generation"
    ],
    useCases: [
      "Track which events are most popular",
      "Identify your most engaged members",
      "Monitor community growth over time",
      "Measure ROI on community initiatives"
    ],
    colorClass: "bg-sky-100 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400",
    image: analyticsReportingImage
  }
};

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer" data-testid="header-logo">
            <img 
              src={logoPath} 
              alt="Golf Junkies Logo" 
              className="h-10 w-10 object-contain"
              data-testid="img-logo"
            />
            <span className="text-xl font-bold text-foreground" data-testid="text-brand-name">Golf Junkies</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6" data-testid="nav-main">
          <Link href="/#features" className="text-sm font-medium text-muted-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-features">Features</Link>
          <Link href="/#benefits" className="text-sm font-medium text-muted-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-benefits">Benefits</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-muted-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-how-it-works">How It Works</Link>
          <Link href="/#pricing" className="text-sm font-medium text-muted-foreground hover-elevate px-2 py-1 rounded-md" data-testid="link-pricing">Pricing</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" data-testid="button-login">Log In</Button>
          <Button size="sm" data-testid="button-demo">Request Demo</Button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12" data-testid="section-footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 mb-4 cursor-pointer" data-testid="footer-logo">
                <img src={logoPath} alt="Golf Junkies Logo" className="h-10 w-10 object-contain" />
                <span className="text-xl font-bold">Golf Junkies</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed" data-testid="text-footer-description">
              Golf Junkies is a leading golf community management software platform helping clubs and communities connect members, manage events and competitions, enable reciprocal play, and grow participation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4" data-testid="heading-footer-product">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Integrations", "API"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid={`link-footer-product-${i}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4" data-testid="heading-footer-company">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded inline-block" data-testid={`link-footer-company-${i}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Golf Junkies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover-elevate px-1 py-0.5 rounded" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function FeaturePage() {
  const { slug } = useParams<{ slug: string }>();
  const feature = slug ? featuresData[slug as keyof typeof featuresData] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const defaultTitle = "Golf Community Management Software for Clubs & Members | Golf Junkies";
    const defaultDescription = "Golf Junkies is an all-in-one golf community management platform for clubs and communities. Manage members, events, competitions, content, and reciprocal play from one powerful system.";
    const defaultImage = "/favicon.png";
    const defaultUrl = "https://golfjunkies.com";
    
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      const tag = document.querySelector(selector);
      if (tag) tag.setAttribute(attribute, value);
    };
    
    if (feature) {
      const featureTitle = `${feature.title} | Golf Junkies`;
      const featureDescription = feature.heroDescription;
      const featureUrl = `${defaultUrl}/features/${slug}`;
      
      document.title = featureTitle;
      
      updateMetaTag('meta[name="description"]', 'content', featureDescription);
      updateMetaTag('meta[property="og:title"]', 'content', featureTitle);
      updateMetaTag('meta[property="og:description"]', 'content', featureDescription);
      updateMetaTag('meta[property="og:url"]', 'content', featureUrl);
      updateMetaTag('meta[property="og:image"]', 'content', defaultImage);
      updateMetaTag('meta[name="twitter:title"]', 'content', featureTitle);
      updateMetaTag('meta[name="twitter:description"]', 'content', featureDescription);
    } else {
      document.title = "Feature Not Found | Golf Junkies";
    }
    
    return () => {
      document.title = defaultTitle;
      updateMetaTag('meta[name="description"]', 'content', defaultDescription);
      updateMetaTag('meta[property="og:title"]', 'content', defaultTitle);
      updateMetaTag('meta[property="og:description"]', 'content', defaultDescription);
      updateMetaTag('meta[property="og:url"]', 'content', defaultUrl);
      updateMetaTag('meta[property="og:image"]', 'content', defaultImage);
      updateMetaTag('meta[name="twitter:title"]', 'content', "Golf Community Management Software | Golf Junkies");
      updateMetaTag('meta[name="twitter:description"]', 'content', "All-in-one golf community management platform. Manage members, events, competitions, and reciprocal play.");
    };
  }, [feature, slug]);

  if (!feature) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Feature not found</h1>
            <Link href="/" data-testid="link-back-home">
              <Button data-testid="button-back-home">Back to Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = feature.icon;

  return (
    <div className="min-h-screen flex flex-col" data-testid={`page-feature-${slug}`}>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <Link href="/#features" data-testid="link-back-features">
              <Button variant="ghost" className="mb-6 gap-2" data-testid="button-back">
                <ArrowLeft className="w-4 h-4" />
                Back to Features
              </Button>
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 min-w-16 min-h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-500 flex items-center justify-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" data-testid="heading-feature-title">
                      {feature.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mt-2" data-testid="text-feature-subtitle">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-feature-hero-description">
                  {feature.heroDescription}
                </p>
                
                <div className="pt-4">
                  <h3 className="font-bold text-xl mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3" data-testid={`benefit-${i}`}>
                        <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  {feature.image ? (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full rounded-lg"
                      data-testid="img-feature"
                    />
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm">Feature preview coming soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-sky-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of golf communities already using Golf Junkies to engage their members.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/create-account">
                  <Button size="lg" className="gap-2 bg-white text-emerald-700 hover:bg-white/90" data-testid="button-start-trial-cta">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="button-contact-us-cta">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
