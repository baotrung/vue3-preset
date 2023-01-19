<script setup lang="ts">
import { useStore } from '@src/store';
import { appSettingMutations } from '@src/store/modules/AppSetting';
import { computed } from 'vue';
import CustomButton from '@src/components/common/CustomButton.vue';

defineProps<{ msg: string }>();
const store = useStore();

const count = computed(() => store.state.appSetting.count);

const increaseCount = () => {
  store.commit(appSettingMutations.increaseCount, 1);
};
</script>

<template>
  <h1 class="text-3xl font-bold">{{ msg }}</h1>

  <div class="card">
    <custom-button class="test" @click="increaseCount">
      count is {{ count }}
    </custom-button>
  </div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}

.card {
  button {
    background-color: rgb(0, 97, 241);
  }
}
</style>
