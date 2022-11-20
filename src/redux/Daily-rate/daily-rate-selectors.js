export const selectDailyRate = state => Math.round(state.dailyRate.dailyRate);

export const selectNotAllowedProducts = state =>
  state.dailyRate.notAllowedProducts;
