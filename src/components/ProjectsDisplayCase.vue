<template>
    <div class="w-100">
        <div class="p-2 flex flex-col xl:flex-row">
            <div class="basis-2/6">
                <img 
                    class="hidden xl:block p-3 max-h-60 xl:max-h-96 mx-auto drop-shadow-lg" 
                    alt="Valve Ai Logo" 
                    src="../assets/vai_logo_stacked.png" 
                />
                <img 
                    class="block xl:hidden p-3 max-h-60 xl:max-h-96 mx-auto drop-shadow-lg" 
                    alt="Valve Ai Logo" 
                    src="../assets/vai_logo_standard.png" 
                />
            </div>
            <div class="flex flex-col basis-4/6 p-2">
                <ProjectsHeader
                    title="Valve Ai"
                    role="Senior Lead Architect & Developer"
                ></ProjectsHeader>
                <ProjectsContent
                    leadText="Next Generation Backflow Device Compliance Managment Software"
                    :content="vaiContent"
                ></ProjectsContent>
                <ProjectsInteractionRow>
                    <a class="grow" href="https://www.valveai.com/" target="_blank">
                        <div class="text-lg text-center underline underline-offset-2 p-1 shadow-lg bg-ht-dark hover:bg-ht-darker text-ht-whiter">
                            Visit Valve Ai's Website
                        </div>
                    </a>
                    <div class="grow mt-2 md:mt-0 ml-0 md:ml-2 text-lg text-center p-1 shadow-lg bg-ht-dark hover:bg-ht-darker text-ht-whiter">
                        Learn More About This Project
                    </div>
                </ProjectsInteractionRow>
            </div>
        </div>
        <div class="p-2 flex flex-col xl:flex-row">
            <div class="basis-2/6">
                <img 
                    class="hidden xl:block p-3 max-h-60 xl:max-h-96 mx-auto rounded-full drop-shadow-lg" 
                    alt="Johnson's Dictionary Online Quotes Project Logo" 
                    src="../assets/jdo_quotes_logo.jpg"
                />
                <img 
                    class="block xl:hidden p-3 max-h-60 xl:max-h-96 mx-auto drop-shadow-lg" 
                    alt="Valve Ai Logo" 
                    src="../assets/jdo_quotes_banner_logo.png" 
                />
            </div>
            <div class="flex flex-col basis-4/6 p-2">
                <ProjectsHeader
                    title="Johnson's Dictionary Online Quote Sourcing"
                    titleSize="text-2xl xl:text-3xl 2xl:text-4xl"
                    role="System Architect & Data Vizualization Lead"
                ></ProjectsHeader>
                <ProjectsContent
                    leadText="Cybernetically Enhancing A Dictionary From The 18th Century"
                    :content="jdoContent"
                ></ProjectsContent>
                <ProjectsInteractionRow>
                    <a class="grow" href="https://johnsonsdictionaryonline.com/" target="_blank">
                        <div class="text-lg text-center underline underline-offset-2 p-1 shadow-lg bg-ht-dark hover:bg-ht-darker text-ht-whiter">
                            Visit Johnson's Dictionary Online
                        </div>
                    </a>
                    <div class="grow mt-2 md:mt-0 ml-0 md:ml-2 text-lg text-center p-1 shadow-lg bg-ht-dark hover:bg-ht-darker text-ht-whiter">
                        Learn More About This Project
                    </div>
                </ProjectsInteractionRow>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectsHeader from './subcomponents/ProjectsHeader.vue'
import ProjectsContent from './subcomponents/ProjectsContent.vue'
import ProjectsInteractionRow from './subcomponents/ProjectsInteractionRow.vue'

export default {
    name: "ProjectsDisplayCase",
    components: {
        ProjectsHeader,
        ProjectsContent,
        ProjectsInteractionRow
    },
    data() {
        return {
            vaiContent:[
                `A web based SaaS, architected from the ground up as a scalable multitenant ecosystem. 
                Built on a modern tech stack consisting of Vue, Node.js, Express, and PostgreSQL,
                Valve Ai is the industry's most advanced backflow compliance management software suite.`,
                `A deeply integrated ecosystem, focused on meeting the Florida Department of Environmental Protection's 
                strict standards for water quality and safety, Valve Ai provides for every stage and level of 
                backflow device management, including work order entry, report generation, 
                compliance statistics, GIS mapping, water-system-wide troubleshooting, 
                and end-of-year FDEP compliance reporting.`,
                `With more than 140,000 backflow devices under management, Valve Ai is used 
                by water purveyors, governments, contractors, and individual testers alike. 
                Valve Ai is well loved by it's users for it's intuitive implimentation of 
                the most powerful featureset in the backflow industry.`
            ],
            jdoContent:[
                `Known internally as JDO Quotes, this project is the product of a six month partnership
                with the UCF Center for Humanities and Digital Research (CHDR, pronounced 'cheddar').`,
                `In concert with a grant from the National Endowment for the Humanities, researchers and 
                schollars at UCF CHDR's Johnsons Dictionary Online project endevaored to find the original
                text source for the nearly 250,000 quotes used across two versions of Samuel Johnson's dictionary, 
                an early english dictionary important in the study of fields such as english literature, 
                historical law, and etymology. However, manually identifying the cannonical source for 
                each of these quotes would likely have taken countless man hours over many years.`,
                `The JDO Quotes project is a scratch built, purpose driven architecture that provides 
                automated ingestion, parsing, and searching of a corpus of historical text contemporary to 
                the time period of Johnson's writing.`,
                `Industry standard tools, along with purpose built modules, are integrated though a custom 
                built pipeline provide a reliable platform perfectly suited for the task. Elasticsearch is used
                heavily thoughout the project, serving multiple roles thoughout the pipeline.`,
                `The result of this a complete pipeline run ready for verification within just a few hours.`,
                `Post-pipeline, the JDO Quotes project, also provides an extensive set of tools for CHDR researchers.`,
                `Project users are provided with a site-hosted full stack application built uniquely for the project.
                This web based interface allows users to perform verification at speeds impossible prior to it's
                creation. Data analysis shows that CHDR researchers are regularly able to perform more than 200 
                verifications per hour. This is up from less than 10 when processed manually.`,
                `This is due in no small part to a unique implementation of graph theory, which allows a researcher
                to verify multiple quotes with a single action.`
            ]
        }
    },
    methods: {
    },
    computed:{
    },
    watch:{
    },
    beforeMount () {
    },
    mounted () {
    },
    beforeDestroy () {
    },
}
</script>

<style scoped>

</style>