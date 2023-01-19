import { Module } from "vuex";
import { AppSettingState, RootState } from "../type";

//#region state
const initialState = (): AppSettingState => ({
  count: 0,
});
//#endregion

//#region mutations
export const appSettingMutations = {
  increaseCount: "appSetting/increaseCount",
  decreaseCount: "appSetting/decreaseCount",
};

const increaseCount = (state: AppSettingState, amount: number) => {
  state.count += amount;
};

const decreaseCount = (state: AppSettingState, amount: number) => {
  state.count -= amount;
};
//#endregion

export const appSetting: Module<AppSettingState, RootState> = {
  state: initialState,
  mutations: {
    [appSettingMutations.increaseCount]: increaseCount,
    [appSettingMutations.decreaseCount]: decreaseCount,
  },
};
