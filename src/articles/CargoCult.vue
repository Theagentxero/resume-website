<template>
    <div>
        <div 
            class="bg-right-top bg-cover flex flex-col sm:flex-row justify-end sm:justify-start"
            :style="{
                'background-image': 'url(\'/blog_birds_wide.webp\')'
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
                    The New Face of Cargo Cult Programming
                </div>
                <div class="text-lg sm:text-xl">
                    This is an intervention. When you use that package manager too much, you're just not yourself.
                </div>
            </div>
        </div>
        <ArticleHeader
            articleDate="August 2022"
            permalink="https://howdytaylor.com/blog/new_face_of_cargo_cult_programming"
        ></ArticleHeader>
        <div class="bg-ht-whiter mt-2">
            
            <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                What is cargo cult programming anyways?
            </div>
            <div class="p-2">
                <p class="my-2 leading-relaxed">
                    <span class="font-semibold">Cargo Cult Programming</span> as defined by 
                    <a href="http://www.catb.org/~esr/jargon/html/C/cargo-cult-programming.html" target="_blank" class="underline text-blue-800 hover:text-blue-500">Eric S. Raymond's Jargon File</a>
                </p>
                <p class="my-2 p-3 bg-ht-white leading-relaxed">
                    A style of programming dominated by ritual inclusion of code or program structures 
                    that serve no real purpose. A cargo cult programmer will usually explain the extra code as a way of 
                    working around some bug encountered in the past, but usually neither the bug nor the reason the code 
                    apparently avoided the bug was ever fully understood
                </p>
                <p class="my-2 leading-relaxed">
                    <a href="https://docs.microsoft.com/en-us/archive/blogs/ericlippert/syntax-semantics-micronesian-cults-and-novice-programmers" target="_blank" class="underline text-blue-800 hover:text-blue-500">In a blog post from 2004, Eric Lippert discusses his take on the subject.</a>
                    (Recommended reading for developers of all levels)
                </p>
                <div class="text-base italic text-center bg-ht-blue p-2 mb-2 shadow-lg">
                    Side Note: This cargo cult behavior can actually affect an entire organization, which causes <a href="https://stevemcconnell.com/articles/cargo-cult-software-engineering/" target="_blank" class="underline text-blue-800 hover:text-blue-500">Cargo Cult Software Engineering</a>.
                </div>
            </div>
           <div class="text-lg font-bold p-2 bg-ht-dark-brown text-ht-white shadow-lg">
                The Emperor's New Clothes
            </div>
            <div class="p-2">
                <p class="my-2 leading-relaxed">
                    While not stictly the same as cargo cult programming, its thoughtless nature has arrived back in town, riding on the coattails of package managers. 
                </p>
                <p class="my-2 leading-relaxed">
                    Consider a project using Node.js with its package manager NPM.
                </p>
                <div class="text-base italic text-center
                    bg-ht-blue p-2 mb-2 sm:mb-0 sm:m-2 sm:w-64 sm:float-left lg:w-96 2xl:w-auto 2xl:max-w-lg
                    shadow-lg">
                    <span class="font-semibold">All of this assumes of course that the developer is making an active decision at all</span>
                    <hr class="border-ht-dark-brown my-2">
                    With the rise of Youtube tutorials, novice programmers can be "taken
                    for a ride" so to speak, learning how to build X, using framework Y. 
                    As such the developer may not realize that other methods exist, nor
                    might they realize that building X may require no framework at all.
                    Perhaps this is a "when all you have is a hammer" sort of situation, 
                    and the developer feels the only solution to X is Y.
                </div>
                <p class="my-2 leading-relaxed">
                    If given the task of developing a REST API, most Node.js developers will ritualistically install their 'favorite' HTTP
                    server framework, Express.js, KOA, or Fastify. Little thought is given to if such a framework is even helpful for their purposes, suitable for the actual application,
                    or required to achieve the goal.
                </p>
                <p class="my-2 leading-relaxed">
                    When questioned on their framework choice, most will answer, "I've used this framework for building a REST API in the past". 
                </p>
                <p class="my-2 leading-relaxed">
                    Notice that rather than carefully considering the current project requirements and evaluating options,
                    or even reiterating the decisions that led them to their original usage of the framework, 
                    the developer leans exclusively on experience with a framework to justify its inclusion.
                    <span class="italic">On the surface, it's not a bad point, familiarity can be a good reason for using a particular framework. 
                    But it should never be <span class="font-semibold">the only reason</span> to use a framework.</span>
                    Note that at no point did the developer here give reason for the inclusion of 
                    <span class="italic">any</span> framework, leave alone this one. This seems like another way of saying 
                    "This is the way we've always done it". A surrender to a higher power in all the wrong ways.
                </p>
                <p class="my-2 leading-relaxed">
                    This behavior is more prevalent today than most organizations would like to admit. 
                    Many organizations encourage this behavior by encouraging the use of only the 
                    most popular framework. This can lead developers to feel boxed in or uncomfortable 
                    by the choice being thrust upon them. 
                </p>
                <p class="my-2 leading-relaxed">
                    What do uncomfortable people do? They seek comfort.
                </p>
                <p class="my-2 leading-relaxed">
                    Turning to the package manager to provide the warm familiar syntax of a package which they hope might
                    ease their discomfort with the entire project.
                </p>
                <p class="my-2 leading-relaxed">
                    Package managers aren't evil, nor is using packages inherently bad. It's important to note 
                    that familiarity with a particular package is a good reason to choose to use it over an alternative. 
                    But only if the choice is conscious, informed, considerate of the project requirements, made with purpose, and well reasoned. 
                    We should all be wary of using packages just because "That's the way we've always done it".
                </p>
            </div>
        </div>
        <ArticleFooter></ArticleFooter>
    </div>
</template>

<script>
import TextPopper from '../components/subcomponents/TextPopper.vue';
import ArticleFooter from '../components/subcomponents/ArticleFooter.vue';
import ArticleHeader from '../components/subcomponents/ArticleHeader.vue';

export default {
    components:{
        TextPopper,
        ArticleFooter,
        ArticleHeader
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped>

</style>