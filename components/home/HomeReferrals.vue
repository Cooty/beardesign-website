<template>
    <ui-section id="referrals">
        <ui-wrapper as="article" class="bd-home-page-full-height">
            <ui-title :priority="2" :appearance="1" sectionName="referrals" class="bd-mw-800">
                {{ referralsContent?.title }}
            </ui-title>

            <referral-carousel :referrals="(referrals as Referral[])"
                :label="referralsContent?.body.children[2].children[0].value" />

            <ui-title :priority="2" class="bd-mw-800">{{ referralsContent?.description }}</ui-title>

            <logo-grid v-if="!pending && !error && typedFeaturedClients.length">
                <logo-grid-item v-for="client in typedFeaturedClients" :key="client.id" :src="client.logo.src"
                    :alt="client.name" :width="client.logo.width" :height="client.logo.height" :link="client.link" />
            </logo-grid>
        </ui-wrapper>
    </ui-section>
</template>

<script setup lang="ts">
import Referral from '~~/interfaces/Referral.interface'
import Client from '~~/interfaces/Client.interface'

const { data: referrals } = await useFetch('/api/referral')

const { data: featuredClients, pending, error } = await useFetch('/api/client?isFeatured=true')

const typedFeaturedClients = featuredClients.value as Client[]

const { data: referralsContent } = await useAsyncData('homeReferrals', () => queryContent('home', '_referrals').findOne())
</script>