import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { trackLinkClick } from "@/lib/analytics";

import Home from "@/pages/Home";
import Story from "@/pages/Story";
import Ecosystem from "@/pages/Ecosystem";
import Portfolio from "@/pages/Portfolio";
import Writing from "@/pages/Writing";
import Contact from "@/pages/Contact";
import Pay from "@/pages/Pay";
import ProjectBrief from "@/pages/ProjectBrief";
import IndustryPage, { industryPages } from "@/pages/IndustryPage";
import HomeServicesLanding from "@/pages/HomeServicesLanding";
import CampaignTrades from "@/pages/CampaignTrades";

import FoodBrandGTM from "@/pages/blog/FoodBrandGTM";
import AIAutomation from "@/pages/blog/AIAutomation";
import WebsiteCost from "@/pages/blog/WebsiteCost";
import MarketingChannel from "@/pages/blog/MarketingChannel";
import GoogleVsMeta from "@/pages/blog/GoogleVsMeta";
import PersonalBrand from "@/pages/blog/PersonalBrand";
import HomepageCopy from "@/pages/blog/HomepageCopy";

import NotFound from "@/pages/not-found";
import routeManifest from "@/route-manifest.json";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  const components = {
    home: Home,
    story: Story,
    ecosystem: Ecosystem,
    portfolio: Portfolio,
    writing: Writing,
    contact: Contact,
    pay: Pay,
    "project-brief": ProjectBrief,
    "get-in-touch-campaign": CampaignTrades,
    "home-services-trades": HomeServicesLanding,
    "newcomer-owned-businesses": () => <IndustryPage content={industryPages["newcomer-owned-businesses"]} />,
    "agri-food-marketing": () => <IndustryPage content={industryPages["agri-food-marketing"]} />,
    "food-brand-gtm-strategy": FoodBrandGTM,
    "ai-automation-small-business": AIAutomation,
    "real-cost-of-bad-website": WebsiteCost,
    "choosing-the-right-marketing-channel": MarketingChannel,
    "google-ads-vs-meta-ads": GoogleVsMeta,
    "why-personal-brand-matters": PersonalBrand,
    "homepage-that-converts": HomepageCopy,
  } satisfies Record<string, React.ComponentType>;

  return (
    <Switch>
      {routeManifest.map((route) => {
        const Component = components[route.component as keyof typeof components];
        return <Route key={route.path} path={route.path} component={Component} />;
      })}
      <Route path="/get-in-touch/:niche" component={CampaignTrades} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (anchor instanceof HTMLAnchorElement) trackLinkClick(anchor);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
