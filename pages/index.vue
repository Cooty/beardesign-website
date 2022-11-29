<template>
    <LayoutMain>
        <UiSection id="about">
            <UiWrapper as="article" class="bd-home-page-full-height bd-home-page-full-height--centered">
                <UiTitle sectionName="about">
                    {{ about?.title }}
                </UiTitle>
                <UiLead class="bd-hp-lead bd-mw-800">
                    {{ about?.description }}
                </UiLead>
                <div>
                    <UiButton as="a" size="l" to="/about">
                        {{ about?.body.children[2].children[0].value }}
                    </UiButton>
                </div>
            </UiWrapper>
        </UiSection>
        <UiSection id="work">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="work">
                    {{ work?.title }}
                </UiTitle>
                <UiLead class="bd-hp-lead bd-mw-800">
                    {{ work?.description }}
                </UiLead>
                <UiGrid>
                    <UiGridItem v-for="workItem in DUMMY_WORK_ITEMS" :key="workItem.title">
                        <UiCard :href="`/work/${workItem.slug}`" :full-height="true">
                            <template v-if="workItem.image" #header>
                                <img :src="workItem.image" :alt="workItem.title" />
                            </template>
                            <UiTitle :priority="3" :appearance="6">{{ workItem.title }}</UiTitle>
                            <p class="small">
                                {{ workItem.description }}
                            </p>
                            <template v-if="workItem.tags" #footer>
                                <UiTags>
                                    <UiTag v-for="tag in workItem.tags" :key="tag.name" :text="tag.name"
                                        :type="tag.slug" as="span" />
                                </UiTags>
                            </template>
                        </UiCard>
                    </UiGridItem>
                    <UiGridItem>
                        <UiCard :full-height="true" class="more-card work-more-bg">
                            <UiButton as="a" size="l" to="/work">
                                {{ work?.body.children[2].children[0].value }}
                            </UiButton>
                        </UiCard>
                    </UiGridItem>
                </UiGrid>
                <h2 class="bd-mw-800">
                    {{ work?.body.children[3].children[0].value }}
                </h2>
                <Carousel v-if="DUMMY_TECH_LOGOS && DUMMY_TECH_LOGOS.length"
                    :label="work?.body.children[4].children[0].value">
                    <CarouselItemCardLogo v-for="logo in DUMMY_TECH_LOGOS" :key="logo.id" :name="logo.name"
                        :image="logo.image" />
                </Carousel>
            </UiWrapper>
        </UiSection>
        <UiSection id="blog">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="blog">{{ blog?.title }}</UiTitle>
                <UiCardList v-if="DUMMY_BLOG_POSTS && DUMMY_BLOG_POSTS.length">
                    <UiCardListItem v-for="blogPost in DUMMY_BLOG_POSTS" :key="blogPost.id"
                        :href="`/blog/${blogPost.slug}`" :class="!blogPost.image ? 'no-image' : undefined">
                        <template v-if="blogPost.image" #header>
                            <img :src="blogPost.image" :alt="blogPost.title" />
                        </template>
                        <UiTitle :priority="3" :appearance="6">{{ blogPost.title }}</UiTitle>
                        <p class="small">
                            {{ blogPost.description }}
                        </p>
                        <template v-if="blogPost.tags && blogPost.tags.length" #footer>
                            <UiTags>
                                <UiTag v-for="tag in blogPost.tags" :key="tag.name" :text="tag.name" :type="tag.slug"
                                    as="span" />
                            </UiTags>
                        </template>
                    </UiCardListItem>
                    <UiButtonRow>
                        <UiButton as="a" size="l" to="/blog">
                            {{ blog?.description }}
                        </UiButton>
                    </UiButtonRow>
                </UiCardList>
            </UiWrapper>
        </UiSection>
        <UiSection id="referrals">
            <UiWrapper as="article" class="bd-home-page-full-height">
                <UiTitle :priority="2" :appearance="1" sectionName="referrals" class="bd-mw-800">
                    {{ referrals?.title }}
                </UiTitle>
                <Carousel :label="referrals?.body.children[2].children[0].value"
                    :splide-options="referralCarouselOptions">
                    <CarouselItemReferral v-for="referral in DUMMY_REFERRALS" :key="referral.id"
                        :name="referral.person.name" :image="referral.person.image" :title="referral.person.title"
                        :link="referral.person.link ? referral.person.link : undefined"
                        :organization="referral?.person?.organization?.name ? referral.person.organization.name : undefined"
                        :text="referral.text" />
                </Carousel>
                <UiTitle :priority="2" class="bd-mw-800">{{ referrals?.description }}</UiTitle>
                <LogoGrid v-if="DUMMY_CLIENT_LOGOS && DUMMY_CLIENT_LOGOS.length">
                    <LogoGridItem v-for="logo in DUMMY_CLIENT_LOGOS" :key="logo.id" :src="logo.image" :alt="logo.name"
                        :width="logo.width" :height="logo.height" :link="logo.link" />
                </LogoGrid>
            </UiWrapper>
        </UiSection>
    </LayoutMain>
</template>

<script lang="ts" setup>
import { Options } from '@splidejs/splide'
const { data: meta } = await useAsyncData('home', () => queryContent('home', '_meta').findOne())
const { data: about } = await useAsyncData('homeAbout', () => queryContent('home', '_about').findOne())
const { data: work } = await useAsyncData('homeWork', () => queryContent('home', '_work').findOne())
const { data: blog } = await useAsyncData('homeBlog', () => queryContent('blog', '_home-teaser').findOne())
const { data: referrals } = await useAsyncData('homeReferrals', () => queryContent('home', '_referrals').findOne())

const DUMMY_WORK_ITEMS = [
    {
        title: 'Some work item #1',
        description: 'Short description for that work item',
        slug: 'some-work-item-1',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'TypeScript', slug: 'type-script' },
            { name: 'Vue.js', slug: 'vue' },
            { name: 'SPA', slug: 'spa' },
        ]
    },
    {
        title: 'Some work item #2',
        description: 'Short description for that work item',
        slug: 'some-work-item-2',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'TypeScript', slug: 'type-script' },
            { name: 'React', slug: 'react' },
            { name: 'SPA', slug: 'spa' },
        ]
    },
    {
        title: 'Some work item #3',
        description: 'Short description for that work item',
        slug: 'some-work-item-3',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'TypeScript', slug: 'type-script' },
            { name: 'vanilla JS', slug: 'vanilla' },
            { name: 'Symfony', slug: 'symfony' },
            { name: 'devOps', slug: 'dev-ops' },
        ]
    },
    {
        title: 'Some work item #4',
        description: 'Short description for that work item',
        slug: 'some-work-item-4',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'vanilla JS', slug: 'vanilla' },
            { name: 'WordPress', slug: 'wordpress' },
            { name: 'SCSS', slug: 'scss' },
        ]
    },
    {
        title: 'Some work item #5',
        description: 'Short description for that work item',
        slug: 'some-work-item-5',
        image: 'https://via.placeholder.com/400x225',
        tags: [
            { name: 'vanilla JS', slug: 'vanilla' },
            { name: 'WordPress', slug: 'wordpress' },
            { name: 'SCSS', slug: 'scss' },
        ]
    }
]

const DUMMY_TECH_LOGOS = [
    {
        id: 't1',
        image: 'https://via.placeholder.com/100x100',
        name: 'HTML5'
    },
    {
        id: 't2',
        image: 'https://via.placeholder.com/100x100',
        name: 'CSS3'
    },
    {
        id: 't3',
        image: 'https://via.placeholder.com/100x100',
        name: 'SASS'
    },
    {
        id: 't4',
        image: 'https://via.placeholder.com/100x100',
        name: 'ECMA Script'
    },
    {
        id: 't5',
        image: 'https://via.placeholder.com/100x100',
        name: 'TypeScript'
    },
    {
        id: 't6',
        image: 'https://via.placeholder.com/100x100',
        name: 'Vue.js'
    },
    {
        id: 't7',
        image: 'https://via.placeholder.com/100x100',
        name: 'Vite'
    },
    {
        id: 't8',
        image: 'https://via.placeholder.com/100x100',
        name: 'Nuxt.js'
    },
    {
        id: 't9',
        image: 'https://via.placeholder.com/100x100',
        name: 'React'
    },
    {
        id: 't10',
        image: 'https://via.placeholder.com/100x100',
        name: 'Next.js'
    },
    {
        id: 't11',
        image: 'https://via.placeholder.com/100x100',
        name: 'Storybook.js'
    },
    {
        id: 't12',
        image: 'https://via.placeholder.com/100x100',
        name: 'Jest'
    },
    {
        id: 't13',
        image: 'https://via.placeholder.com/100x100',
        name: 'Vitetest'
    },
    {
        id: 't14',
        image: 'https://via.placeholder.com/100x100',
        name: 'Cypress'
    },
    {
        id: 't15',
        image: 'https://via.placeholder.com/100x100',
        name: 'Node.js'
    },
    {
        id: 't16',
        image: 'https://via.placeholder.com/100x100',
        name: 'Express.js'
    },
    {
        id: 't17',
        image: 'https://via.placeholder.com/100x100',
        name: 'Sympfony'
    },
    {
        id: 't18',
        image: 'https://via.placeholder.com/100x100',
        name: 'WordPress'
    },
    {
        id: 't19',
        image: 'https://via.placeholder.com/100x100',
        name: 'Docker'
    },
    {
        id: 't20',
        image: 'https://via.placeholder.com/100x100',
        name: 'Github Actions'
    },
    {
        id: 't21',
        image: 'https://via.placeholder.com/100x100',
        name: 'GitLab CI'
    },
]

const DUMMY_BLOG_POSTS = [
    {
        id: 'b1',
        title: 'My first blog post',
        slug: 'my-first-blog',
        image: 'https://via.placeholder.com/300x225',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'JavaScript', slug: 'javascript' },
            { name: 'Python', slug: 'python' },
        ]
    },
    {
        id: 'b2',
        title: 'My second blog post',
        slug: 'my-second-blog',
        image: 'https://via.placeholder.com/300x225',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'JavaScript', slug: 'javascript' },
            { name: 'Python', slug: 'python' },
            { name: 'Java', slug: 'java' },
        ]
    },
    {
        id: 'b3',
        title: 'My third blog post has no image',
        slug: 'my-third-blog',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'CSS', slug: 'css' },
            { name: 'Accessibility', slug: 'accessibility' },
        ]
    },
    {
        id: 'b4',
        title: 'My fourth blog post',
        slug: 'my-fourth-blog',
        image: 'https://via.placeholder.com/300x225',
        description: 'In this post I write about some super important stuff',
        tags: [
            { name: 'HTML', slug: 'html' },
            { name: 'Node.js', slug: 'node-js' },
        ]
    }
]

const DUMMY_CLIENT_LOGOS = [
    {
        id: 'cl1',
        name: 'K-Monitor',
        link: 'https://k-monitor.hu/home',
        image: 'https://via.placeholder.com/240x80',
        width: 240,
        height: 80
    },
    {
        id: 'cl2',
        name: 'Oetker Group',
        link: 'https://www.oetker-group.com/en/home',
        image: 'https://via.placeholder.com/200x80',
        width: 200,
        height: 80
    },
    {
        id: 'cl3',
        name: 'POSSIBLE (now Wunderman Thompson)',
        link: 'https://possible.com',
        image: 'https://via.placeholder.com/220x80',
        width: 220,
        height: 80
    },
    {
        id: 'cl4',
        name: 'HealthHero',
        link: 'https://www.healthhero.com/',
        image: 'https://via.placeholder.com/130x80',
        width: 130,
        height: 80
    }
]

const DUMMY_REFERRALS = [
    {
        id: 'r1',
        person: {
            name: 'Attila Juhász',
            link: 'https://www.linkedin.com/in/attila-juhasz-5ab28775/',
            image: 'https://via.placeholder.com/100x100',
            title: 'Project coordinator',
            organization: {
                name: 'K-Monitor'
            }
        },
        text: 'Tamás is a really proactive member of the Code for Hungary, a volunteer-based community. Communication is easy with him, the deadlines he has set are always clear and I appreciate that he can say no, when a task doesn\'t fit his schedule.'
    },
    {
        id: 'r2',
        person: {
            name: 'Iaroslav Semenov',
            link: 'https://www.linkedin.com/in/iaroslav-semenov-0b5a643a/',
            image: 'https://via.placeholder.com/100x100',
            title: 'Director Of Engineering',
            organization: {
                name: 'Fernarzt'
            }
        },
        text: '{Waiting for recommendation}'
    },
    {
        id: 'r3',
        person: {
            name: 'Arda Diri',
            link: 'https://www.linkedin.com/in/arda-diri/',
            image: 'https://via.placeholder.com/100x100',
            title: 'VP of Engineering',
            organization: {
                name: 'Yilu'
            }
        },
        text: '{Waiting for recommendation}'
    },
    {
        id: 'r4',
        person: {
            name: 'Arda Diri',
            link: 'https://www.linkedin.com/in/arda-diri/',
            image: 'https://via.placeholder.com/100x100',
            title: 'VP of Engineering',
            organization: {
                name: 'Yilu'
            }
        },
        text: '{Waiting for recommendation}'
    },
    {
        id: 'r5',
        person: {
            name: 'Emanuel Hoch',
            link: 'https://www.linkedin.com/in/emanuelhoch/',
            image: 'https://via.placeholder.com/100x100',
            title: 'Co-Founder & CPO-CTO',
            organization: {
                name: 'Compado'
            }
        },
        text: '{Waiting for recommendation}'
    },
    {
        id: 'r6',
        person: {
            name: 'Szymon Madzielewski',
            link: 'https://www.linkedin.com/in/szymonmadzielewski/',
            image: 'https://via.placeholder.com/100x100',
            title: 'CTO',
        },
        text: '{Waiting for recommendation}'
    },
]

const referralCarouselOptions = {
    perPage: 1,
    perMove: 1,
    breakpoints: {
        480: {
            perPage: 2
        },
        768: {
            perPage: 2
        },
        992: {
            perPage: 2,
            arrows: true,
            padding: '60px',
            gap: '20px',
        },
        1200: {
            perPage: 3,
            gap: '24px',
        }
    }
} as Options

useHead({
    title: meta?.value?.title,
})
</script>

<style scoped lang="scss">
.bd-home-page-full-height {
    min-height: calc(100vh - #{$v-gutter * 4});
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bd-home-page-full-height--centered {
    justify-content: center;
}

.bd-hp-lead {
    margin-top: 1rem;
    margin-bottom: 2rem;
}

.more-card :deep(.card-body) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
}

.work-more-bg {
    background: var(--bd-theme-work-bg-color);
}
</style>