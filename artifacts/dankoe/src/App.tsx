import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Story from "@/pages/Story";
import Ecosystem from "@/pages/Ecosystem";
import Writing from "@/pages/Writing";

import FoodBrandGTM from "@/pages/blog/FoodBrandGTM";
import AIAutomation from "@/pages/blog/AIAutomation";
import WebsiteCost from "@/pages/blog/WebsiteCost";
import MarketingChannel from "@/pages/blog/MarketingChannel";
import GoogleVsMeta from "@/pages/blog/GoogleVsMeta";
import PersonalBrand from "@/pages/blog/PersonalBrand";
import HomepageCopy from "@/pages/blog/HomepageCopy";

import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/story" component={Story} />
      <Route path="/ecosystem" component={Ecosystem} />
      <Route path="/writing" component={Writing} />
      <Route path="/blog" component={Writing} />
      <Route path="/blog/food-brand-gtm-strategy" component={FoodBrandGTM} />
      <Route path="/blog/ai-automation-small-business" component={AIAutomation} />
      <Route path="/blog/real-cost-of-bad-website" component={WebsiteCost} />
      <Route path="/blog/choosing-the-right-marketing-channel" component={MarketingChannel} />
      <Route path="/blog/google-ads-vs-meta-ads" component={GoogleVsMeta} />
      <Route path="/blog/why-personal-brand-matters" component={PersonalBrand} />
      <Route path="/blog/homepage-that-converts" component={HomepageCopy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
