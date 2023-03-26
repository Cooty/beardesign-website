<template>
  <Carousel :label="props.label" :splide-options="carouselOptions">
    <ReferralCarouselItem v-for="referral in props.referrals" :key="referral.id" :name="referral.from.name"
      :image="referral.from.image" :title="referral.from.title" :link="referral.from.link"
      :organization="referral.from.organization" :text="referral.text" />
  </Carousel>
</template>

<script lang="ts" setup>
import { Options } from '@splidejs/splide'
import Referral from '@/interfaces/Referral.interface';

const props = defineProps<{
  label: string,
  referrals: Referral[]
}>()

const carouselOptions = {
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