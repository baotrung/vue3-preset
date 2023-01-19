import { RootState } from './type';
import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { appSetting } from './modules/appSetting';

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  strict: true,
  modules: {
    appSetting,
  },
});

export function useStore(): Store<RootState> {
  return baseUseStore(key);
}
