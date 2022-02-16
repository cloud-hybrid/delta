> Have the GitLab pipelines been optimized to deploy code faster (not waiting for infrastructure updates)?

Have you ever heard of Conway’s Law? It’s a really fun, interesting topic that involves both a bit of CompSci 
    and organizational psychology. 
  
  > *“Any organization will produce a design whose structure is a copy of the organization’s communication structure”.*

I didn’t separate the infrastructure from the code. I also am of strong opinion it shouldn’t be because it puts us
a step back into the place we were just a few months ago.

Overall, in comparison to the other pipelines where they typically fan out from a single source and then merge back together (diamond dependencies), I strictly defined a directed acyclic graph pipeline (DAG); 
execution is performed in the quickest possible manner, regardless how stages may be set up.

The infrastructure component takes less than 30 seconds to validate itself *once correctly built out*, whereas the code component
will always take a linear ~ 5 minutes depending on the front-end complexity + dependencies.

The trade-off here is experience, where I did not correctly architect the pipeline with this goal initially - the need for a complete
teardown and re-deployment today was such a side effect.

> Anything else need to be done with the eBook staging infrastructure?
  - Absolutely. I don't know what yet, but there will certainly be additional pieces of infrastructure required; and as we progress,
    the more likely a refactor will be needed to compensate for making tight deadlines. 
  - But as far as what's certain:
    - API Gateway for Book-related utility functions + general use-cases -- Carlos' lambda function being the first
      appropriate canidate
    - Splitting of User-Service, Auth-Service, and Content Service. There's a lot of uncertainty with the outcome(s) here.
      But I do know that if my hand is forced, these changes will likely have to be manual and without consistent environment-separated
      configuration(s).
    - Document-DB Audit Logging -- I'm planning on doing this tomororow.
    - Azure Functions - these still need to get JWTs enabled, and I genuinely fear that's going to be a last minute
      implementation.
    - IaCing those scaling related updates to the Azure Application(s), and IaCing logging. While not entirely difficult,
      it is overhead and it's important we don't drift consistency across environments.
    - Runners are in a terrible state right now. There not contained, and they're limited to a single runner. I'm unsure
      when there's going to be a patch released. Additionally, Alex Stone may hit this very same road block next time he's
      looking to deploy.
    
> Can I assume we'll test out the Azure function throughput again before you leave for vacation, Jake?
   - I'll try. I think I can get to it Wednesday morning.
 
> Anything blocking the GSW team? 
   - The front-end pipelines today; however, this is going to be remediated shortly -- assuming code-related compilations
     remain consistent.
 
> Anything not going well? Anything going really well?
   - Overall it's going pretty well -- Cody has been exceptionally interested and open to communication; additionally,
     we seem to both be well understood that while perhaps I favor infrastructure, and he development, we both have valuable
     input on either side and we're filling in when appropriate.
   - I am feeling some pressure relating to deadlines, and consequently, I'm without the comfortable certainty that things
     are in a perfect state. Maybe this is a reality I'm growing into -- maybe not.

> Anything else transpire in the last few days I should be aware of?
  - I really don't think so -- I've been trying my best to communicate to both teams to keep everyone in the know,
    but as a reality in this very moment, I'm forgoing providing an update tonight to GSW due to how late it is... even
    though I said I would. I'll probably just send a scheduled response whenever I get done with a few last items here tonight.