<script lang="ts" setup>
import { useLoadingBar } from 'naive-ui'

import router from '../router'

const loadingBar = useLoadingBar()

router.beforeEach(() => loadingBar?.start())

router.afterEach(() => loadingBar?.finish())
</script>

<!-- <template>
  <router-view />
</template> -->

<template>
  <suspense @pending="loadingBar?.start" @resolve="loadingBar.finish">
    <template #default>
      <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <keep-alive>
            <div>
              <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
            </div>
          </keep-alive>
        </transition>
      </router-view>
    </template>
    <template #fallback> Loading... </template>
  </suspense>
</template>

<!-- <script lang="ts" setup>
import { useLoadingBar } from 'naive-ui'
const loadingBar = useLoadingBar()
</script>  -->
