import { createCategory, deleteCategory } from '@/apollo/mutations'
import { categories } from '@/apollo/query'

export const state = () => ({
  listCategory: []
})

export const getters = {
  getCategory: state => (id) => {
    const category = state.listCategory.find(category => category._id === id)
    return {
      ...category,
      content: JSON.parse(category.content)
    }
  }
}

export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.listCategory = categories
  },
  ADD_CATEGORY (state, category) {
    state.listCategory.push(category)
  }
}

export const actions = {
  /** Get all Categories */
  async getCategories ({ commit }) {
    const response = await this.app.apolloProvider.defaultClient.query({
      query: categories
    })
    commit('SET_CATEGORIES', response.data.categories)
  },
  async deleteCategory (context, data) {
    const response = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteCategory,
      variables: {
        _id: data
      }
    })
    return response
  },
  /** New Category */
  async createCategory ({ commit }, category) {
    try {
      const { content, ...data } = category
      const str = JSON.stringify(content)
      const response = await this.app.apolloProvider.defaultClient.mutate({
        mutation: createCategory,
        variables: {
          ...data,
          content: str
        }
      })
      commit('ADD_CATEGORY', response.data.createCategory)
      return response.data.createCategory
    } catch (error) {
      console.log('EEEEEEEE', error)
    }
  }

}
