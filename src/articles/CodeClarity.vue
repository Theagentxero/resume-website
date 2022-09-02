<template>
    <div>
        <div 
            class="bg-right-top bg-cover flex flex-col sm:flex-row justify-end sm:justify-start"
            :style="{
                'background-image': 'url(\'/blog_bearing.webp\')'
            }"
        >
            <div 
                class="flex flex-col
                text-ht-whiter
                sm:mt-16 sm:basis-2/3 self-end p-2 
                border-4 border-ht-dark-brown 
                backdrop-blur backdrop-contrast-100 backdrop-brightness-50"
            >
                <div class="text-2xl sm:text-3xl font-semibold ">
                    The Practical Approach To Code Clarity
                </div>
                <div class="text-lg sm:text-xl">
                    Why linting and formatting don't really reach the core of the problem.
                </div>
            </div>
        </div>
        <ArticleHeader
            articleDate="August 2022"
            permalink="https://howdytaylor.com/blog/code_clarity"
            notes="Article inspired by a conversation I had with one of my software development interns."
        ></ArticleHeader>
        <div class="bg-ht-whiter mt-2">
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                A Story, It's Relevant I Swear
            </div>
            <div class="p-2">
                
                <p class="my-2 leading-relaxed">
                    In my youth, I rebuilt riding lawnmowers with my father to earn pocket money. 
                    Even at that time it was a rarety to see cast iron decks on mowers, with cheaper sheet metal construction already the norm. 
                    Some of these older style cast iron decks had blind holes into which a pair of bearings were pressed to hold the blade spindle, 
                    one bearing was pressed into a blind hole on the top, another into a blind hole from below, and the spindle was typically installed from below.
                    After years of abuse and neglect it was typical that these bearings would need replacement.
                </p>
                <p class="my-2 leading-relaxed">
                    I was just about to pound just such a bearing into the first cast iron deck I had ever encountered when my dad walked over and said
                    <span class=" italic ">"Don't beat that bearing in numbers side down."</span>
                </p>
                <div class="text-lg italic text-center
                    bg-ht-blue p-2 mb-2 sm:mb-0 sm:m-2 sm:w-64 sm:float-right
                    shadow-lg">
                    <i class="fa-solid fa-quote-left"></i>
                    Be nice to the next poor schmuck that has to work on this... Because the likelyhood is, the next poor schmuck; is gonna be you.
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                <p class="my-2 leading-relaxed">
                    He continued <span class=" italic ">"If you beat that in numbers side down it's not very nice to the next guy that comes along. 
                    What if he needs to order another bearing? He's going to be SOL because you put the numbers he needs where nobody can read them."</span>
                </p>
                <p class="my-2 leading-relaxed">
                    In my youthful arrogance I responded <span class=" italic ">"That doesn't seem like its a big deal, 
                    we're putting new bearings in it now. They'll last for at least another ten years. 
                    Nobody is going to have to deal with ordering new bearings for a long time."</span><br>
                </p>
                <p class="my-2 leading-relaxed">
                    <span class=" italic ">"Look son,"</span> he said <span class=" italic ">"Think about it for a minue.
                    When you sell this mower, the people who buy it are going to enjoy it for a long time. They'll think you did a good job working on it.
                    So, when it breaks, because everything breaks eventually, who do you figure they're going to bring it to for repairs?"</span>
                </p>
                <p class="my-2 leading-relaxed">
                    <span class=" italic ">"Well, me hopefully."</span> I replied.
                </p>
                <p class="my-2 leading-relaxed">
                    <span class=" italic ">"So, if thats the case... Be nice to the next poor schmuck that has to work on this... 
                    Because the likelyhood is, the next poor schmuck; is gonna be you."</span>
                </p>
                <p class="my-2 leading-relaxed">
                    
                </p>
            </div>
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                Linting and Formatting
            </div>
            <div class="p-2">
                <div class="text-lg italic text-center
                    bg-ht-blue p-2 mb-2 sm:mb-0 sm:m-2 sm:w-64 sm:float-right
                    shadow-lg"
                >
                    <i class="fa-solid fa-quote-left"></i>
                    Linting and formatting don't solve the problem, but they can create a false sense of security.
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                <p class="my-2 leading-relaxed">
                    Some would say the solution to code clarity is to enforce a set of rules. 
                    To effectively ban the behavior of beating the bearing in numbers side down.
                    This sounds good in theory, after all linting and formatting solve alot of other problems.
                </p>
                <p class="my-2 leading-relaxed">
                    This solution does have a few issues. 
                    First, it's reactionary, handling only issues which have already occured and 
                    exclusively those which rules can be wirtten to prevent happening again.
                    Second, it can suitably cover up the symptoms of the core problem without ever resolving them.
                </p>
                <p class="my-2 leading-relaxed">
                    In short, linting and formatting don't solve the problem, but they can create a false sense of security.
                </p>
                <p class="my-2 leading-relaxed">
                    Consider the following code snippets, noting that both function identically, and both pass a default rules check with ESLint.
                </p>
                <div class="overflow-y-scroll">
                    <pre><code class="language-js">{{lintingExampleBad}}</code></pre>
                </div>
                <br>
                <div class="overflow-y-scroll">
                    <pre><code class="language-js">{{lintingExampleOk}}</code></pre>
                </div>
                <p class="my-2 leading-relaxed">
                    I'd like to apologize for subjecting you to the first code snippet, but I'm sure you've parsed through real production code that looks like that. <br>
                </p>
                <p class="my-2 leading-relaxed">
                    The latter example is much better from a code clarity standpoint. <br>
                    However, a default ESLint installation will view these as equivalent.
                </p>
                <p class="my-2 leading-relaxed">
                    Just make a linting rule against that then, I hear you say.
                </p>
                <p class="my-2 leading-relaxed">
                    Sure, just one question... A rule against what exactly. <br>
                    What hard line rule can you make that will prevent the atrocious behavior on display in the first code snippet. <br>
                </p>
                <p class="my-2 leading-relaxed">
                    I'm sure we can think of a few, let's give it a shot with these rules:
                    <ul class="ml-5">
                        <li class="py-1">
                            <span>Arrow Functions Must Have Parenthesis</span>
                        </li>
                        <li class="py-1">
                            <span>All Conditional Statements Require Curly Braces</span>
                        </li>
                        <li class="py-1">
                            <span>No One Liner Conditional Statements</span>
                        </li>
                        <li class="py-1">
                            <span>All Scoped Blocks Must Use Curly Braces</span>
                        </li>
                        <li class="py-1">
                            <span>All Parameter and Variable Names Must Be At Least Two Characters Long</span>
                        </li>
                    </ul>
                </p>
                <div class="overflow-y-scroll">
                    <pre><code class="language-js">{{lintingPostRules}}</code></pre>
                </div>
                <p class="my-2 leading-relaxed">
                    This is better, but not by much. To steal a concept from <a href="https://wiki.c2.com/?CodeSmell" target="_blank" class="underline text-blue-800 hover:text-blue-500">Kent Beck's famous post on WardsWiki</a>, this code has a smell.
                    This is because the linting rules we created are responding only to the symptoms of the core problem. 
                    The code clarity problem is deeper than just a developer not paying attention, It's symptomatic of a larger, deeper, problem.
                </p>
            </div>
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                The Core Problem
            </div>
            <div class="p-2">
                <p class="my-2 leading-relaxed">
                    The core of this problem is typically a combination of these factors:
                    <ul class="ml-5 list-disc">
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">"I only need it this once"</span> - Followed by the thought "if it works, it works".
                            This factor arrises when a developer feels that the code they are writing isn't reusable. 
                            Perhaps they feel that this code is one-off code, or that the project isn't really theirs.
                            This perception is untrue more often than it is true, for two reasons:
                            <ul class="ml-8 list-disc">
                                <li class="py-1 leading-relaxed">
                                    If this code is different to all other code in the system, why write it at all? 
                                    How was this problem solved in other scenarios? If this code is genuinely required, shouldn't it already exist?
                                    If this code solves a new an novel problem, why build it poorly? Certainly, it would seem like the best plan to
                                    write the clearest possible function to solve this new and novel problem then place that 
                                    function is a library for all others to use, even if only for selfish reasons.
                                </li>
                                <li class="py-1 leading-relaxed">
                                    The reality is that any problem that a developer has to solve by definition makes that problem part of 
                                    his/her problem domain. Upon this realization, any reasonable developer can understand that unclear 
                                    code will be difficult to catalogue, reuse, and maintain thoughout their problem domain. Some developers
                                    need assitance understaning what it is that they are responsible for. Perhaps the developer believes that
                                    this task is outside their wheelhouse, or something they've been asked to do as a one-off project.
                                    It is important to reinforce the concept that the work that is requested of a developer is part of their 
                                    domain <span class="underline">because</span> it is being asked of them.
                                </li>
                            </ul>
                        </li>
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">The developer who writes this code does not have to maintain it.</span> - 
                            This viewpoint is a symtom of one or more the the following problems:
                                <ul class="ml-8 list-disc">
                                    <li class="py-1 leading-relaxed">
                                        <span class="font-semibold">A lack of code ownership within the organization</span> - As an industry, 
                                        software development gives the concept of code ownsership
                                        <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://www.freecodecamp.org/news/why-code-ownership-sucks-and-you-should-never-work-somewhere-that-practices-it-b8fc1c694074"> a bad reupation</a>. 
                                        While railing against the concept of <span class="font-semibold">strong</span> code ownership,
                                        <span class="italic">which is not what I am suggesting, </span> the industry seems to have thrown the baby out 
                                        with the bath water, embracing completely the concept of team ownership without concern that having zero personal 
                                        code owernship or accountability might lead individuals to more readily write unmantainable code. Code ownership 
                                        and resposiblity is an important concept, without it at some level, developers are free to view their code with 
                                        this mentality.
                                    </li>
                                    <li class="py-1 leading-relaxed">
                                        <span class="font-semibold">Lack of domain awareness</span> - This is the same as the second causal point from the
                                        previous factor. This developer does not yet realize that this project has been provided to them as part of their
                                        job responsiblities. Which, unto itself, places the problem quarely into their domain.
                                    </li>
                                    <li class="py-1 leading-relaxed">
                                        <span class="font-semibold">They don't plan to be here when it needs fixing</span> - This is the hardest
                                        problem in this group to solve. Generally this is structural, cultural, managerial, or financial. But it's important to
                                        suss out the root cause of this viewpoint. Other than <span class="italic">"Just Talk About It"</span>, it
                                        is difficult to provide a one-size-fits-all solution.
                                    </li>
                                </ul>
                            </li>
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">Perceived/Real Time Pressue</span> - 
                            <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://www.flyingmag.com/technique-accidents-human-factor-perceived-pressure/">The concept of Perceived Time Pressue is borrowed from the avaiation industry.</a> 
                            It occurs when a pilot self-imposes limitations on the time they have to complete a task, flight, or other important action.
                            Perceived time pressue is a contributing factor is large number of modern aviation incidents. As with all professions,
                            software developers deal with deadlines and time pressue. Features are expected to be completed within a particular timeframe.
                            We should be clear with our developers that this does not excuse poor code clarity, and that if we were forced to choose between
                            on-time and done-right, we would choose done-right. We would choose to reduce the expected output of a sprint or release to ensure
                            that code quality and therefore clarity remained high. (If you preffer code on-time without a reduction is workload, 
                            <a class="underline text-blue-800 hover:text-blue-500" target="_blank" href="https://fpalomba.github.io/pdf/Conferencs/C4.pdf">click here and read lesson 4 in the conclusion</a>,
                            hopefully this will help change that mindset.)
                        </li>
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">Copy and Paste</span> - In my experience, this is less common than the previous factors.
                            Generally speaking, most of the code examples accessible online suffer from the oposite problem. 
                            The provided code is transliterated line-by-line in comments just above each line of code. But some code examples are dense, 
                            terse, and utilitarian. Providing no more than what is required. Code coppied from these sources may have this smell.
                            This copy and paste behavior is itself indicative of a larger issue with the developer's ability to think independently 
                            or to build and evaluate mental models.
                        </li>
                        <li class="py-1 leading-relaxed">
                            <span class="font-semibold">Arrogance</span> - Probably the least likely cause, but it deserves a mention.
                            To be perfectly clear, I've only ever seen this as a cause for this problem once, but the basic mentality was
                            <span class="italic">"If it was difficult to write then it should be difficult to read."</span> This is a 
                            self-resolving problem given enough time. But assuming a solution is required before then, we should remind
                            this developer that <span class="italic">"On Friday, I was working on some code, at that time only god and 
                            I knew how it worked. I left for the weekend, and by Monday, only god knew."</span>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <ArticleFooter></ArticleFooter>
    </div>
</template>

<script>
import ArticleFooter from '../components/subcomponents/ArticleFooter.vue';
import ArticleHeader from '../components/subcomponents/ArticleHeader.vue';

export default {
    components:{
        ArticleFooter,
        ArticleHeader
    },
    data() {
        return {
            lintingExampleBad: null,
            lintingExampleOk: null,
            lintingPostRules: null
        }
    },
    methods: {
    },
    beforeMount(){
        this.lintingExampleBad = `const wrapP = (p, cb)=>p.then(r=>cb(null, r)).catch(e=>cb(e))

wrapP(promiseProvider(), (e, d)=>{ 
    if(e) throw e
    d.toString(); 
})`
    this.lintingExampleOk = `// callback signature is assumed to be callback(err, data)
// returns the provided promise immediately
function promiseCallbackWrapper(rawPromise, callback){
  rawPromise
  .then((result)=>{
    callback(null, result)
  })
  .catch((error)=>{
    callback(error, null);
  })

  return rawPromise;
}

promiseCallbackWrapper(promiseProvider(), (err, result)=>{
  if(err != null){
    // Error Handling
    throw err;
  }
  
  result.toString();
})`
this.lintingPostRules = `const wrapP = (pm, cb)=> {
  pm.then((re)=>{ cb(null, re) }).catch((ee)=>{ cb(ee) })
}

wrapP(promiseProvider(), (ee, dd)=>{ 
    if(ee) {
      throw ee
    }
    dd.toString(); 
})`
    },
    mounted(){
        hljs.highlightAll();
    }
}
</script>

<style scoped>

</style>