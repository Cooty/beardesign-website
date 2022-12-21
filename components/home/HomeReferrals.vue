<template>
    <UiSection id="referrals">
        <UiWrapper as="article" class="bd-home-page-full-height">
            <UiTitle :priority="2" :appearance="1" sectionName="referrals" class="bd-mw-800">
                {{ referrals?.title }}
            </UiTitle>
            <Carousel :label="referrals?.body.children[2].children[0].value" :splide-options="referralCarouselOptions">
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
</template>

<script setup lang="ts">
import { Options } from '@splidejs/splide'

const { data: referrals } = await useAsyncData('homeReferrals', () => queryContent('home', '_referrals').findOne())

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
</script>