export const state = () => ({
  campaigns: [],
  fetched: false
})

export const mutations = {
  setCampaigns (state, campaings) {
    state.campaigns = campaings
  },
  setFetched (state, fetched) {
    state.fetched = fetched
  }
}
