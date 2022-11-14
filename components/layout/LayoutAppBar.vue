<template>
    <header class="app-bar">
        <a href="#main-content" class="sr-only">{{ skipToMain }}</a>
        <NuxtLink to="/" class="home-link">
            <img class="logo" src="~/assets/images/bear-head.svg" :alt="logoAlt" />
        </NuxtLink>
        <nav class="main-menu">
            <NuxtLink to="/about" class="main-menu-link about"><span class="link-text">{{ about }}</span></NuxtLink>
            <NuxtLink to="/work" class="main-menu-link work"><span class="link-text">{{ work }}</span></NuxtLink>
            <NuxtLink to="/blog" class="main-menu-link blog"><span class="link-text">{{ blog }}</span></NuxtLink>
        </nav>
        <div class="theme-switch-container">
            <ThemeSwitcher />
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: 'LayoutAppBar',
    async setup() {
        const { data } = await useAsyncData('navigation', () => queryContent('navigation').findOne());

        return {
            about: data.value.about,
            blog: data.value.blog,
            work: data.value.work,
            skipToMain: data.value.skipToMain,
            logoAlt: data.value.logoAlt,
        }
    }
}
</script>

<style lang="scss" scoped>
.app-bar {
    position: fixed;
    z-index: $z-top;
    background-color: var(--bd-theme-nav-bg-opaque);
    left: 0;
    right: 0;
    bottom: 0;
    height: $app-bar-height;
    backdrop-filter: saturate(180%) blur(10px);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-family: $header-font-stack;
    padding-right: $gutter-base * 2;

    @media screen and (min-width: $bp-navigation) {
        left: 0;
        top: 0;
        right: auto;
        height: auto;
        width: $app-bar-width;
        flex-direction: column;
        flex-wrap: wrap;
        backdrop-filter: unset;
        background-color: var(--bd-theme-nav-bg);
        padding-right: 0;
        padding-bottom: $gutter-base * 2;
    }
}

.home-link {
    display: block;
    height: 100%;
    background-color: var(--bd-theme-logo-bg);
    padding: $gutter-base $gutter-base * 3;
    flex: 0;
    transition: background-color 0.3s ease-in-out;

    &:hover,
    &:focus {
        background-color: var(--bd-theme-logo-active-bg);
    }

    @media screen and (min-width: $bp-navigation) {
        height: auto;
        width: 100%;
    }
}

.logo {
    display: block;
    height: 100%;

    @media screen and (min-width: $bp-navigation) {
        width: 100%;
        height: auto;
    }
}

.main-menu {
    flex: 1;
    height: 100%;
    padding-right: $gutter-base * 2;
    justify-content: flex-end;

    @media screen and (min-width: $bp-navigation) {
        flex-direction: column;
        padding-right: 0;
        justify-content: flex-start;
        height: auto;
        margin-top: $gutter-base * 5;
    }

    &,
    &-link {
        display: flex;
    }

    &-link {
        align-items: center;
        margin: $gutter-base $gutter-base * 2;
        font-size: 1.2rem;
        color: $almost-white;
        position: relative;

        @media screen and (min-width: $bp-navigation) {
            margin: $gutter-base * 2 $gutter-base;
            padding: $gutter-base * 5 0;
            justify-content: center;
        }

        &:hover,
        &:focus {
            .link-text {
                transform: translate3d(0, -3px, 0);
            }
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            left: $gutter-base;
            right: $gutter-base;
            bottom: 0;
            border-radius: $default-radius;
            transition: all 0.3s ease-in-out;
            opacity: 0;
            height: 3px;
        }

        &.router-link-active {
            &::after {
                opacity: 1;
                bottom: $gutter-base;
            }
        }

        &.about {
            &::after {
                background: var(--bd-theme-about-gradient);
            }
        }

        &.work {
            &::after {
                background: var(--bd-theme-work-gradient);
            }
        }

        &.blog {
            &::after {
                background: var(--bd-theme-blog-gradient);
            }
        }
    }
}

.link-text {
    transition: all 0.3s ease-in-out;
}

.theme-switch-container {
    height: 24px;
    margin-top: 3px;

    @media screen and (min-width: $bp-navigation) {
        margin-top: 0;
    }
}
</style>