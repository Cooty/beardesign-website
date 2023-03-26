<template>
    <UiSection id="referrals">
        <UiWrapper as="article" class="bd-home-page-full-height">
            <UiTitle :priority="2" :appearance="1" sectionName="referrals" class="bd-mw-800">
                {{ referralsContent?.title }}
            </UiTitle>

            <ReferralCarousel :referrals="(referrals as Referral[])"
                :label="referralsContent?.body.children[2].children[0].value" />

            <UiTitle :priority="2" class="bd-mw-800">{{ referralsContent?.description }}</UiTitle>
            <LogoGrid v-if="DUMMY_CLIENT_LOGOS && DUMMY_CLIENT_LOGOS.length">
                <LogoGridItem v-for="logo in DUMMY_CLIENT_LOGOS" :key="logo.id" :src="logo.image" :alt="logo.name"
                    :width="logo.width" :height="logo.height" :link="logo.link" />
            </LogoGrid>
        </UiWrapper>
    </UiSection>
</template>

<script setup lang="ts">
import Referral from '~~/interfaces/Referral.interface';

const { data: referrals } = await useFetch('/api/referral')

const { data: referralsContent } = await useAsyncData('homeReferrals', () => queryContent('home', '_referrals').findOne())

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
</script>