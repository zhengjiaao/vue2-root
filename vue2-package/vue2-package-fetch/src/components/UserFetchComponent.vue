<template>
  <div class="user-manager">
    <!-- 用户表单 -->
    <form @submit.prevent="createUser">
      <input
        id="name"
        name="name"
        v-model="formState.name"
        placeholder="姓名"
        required
        minlength="3"
      >
      <input
        v-model="formState.email"
        type="email"
        placeholder="邮箱"
        required
      >
      <input
        v-model.number="formState.age"
        type="number"
        min="0"
        placeholder="年龄（可选）"
      >
      <button type="submit">添加用户</button>
    </form>

    <!-- 用户列表 -->
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <div class="user-info">
          <h3>{{ user.name }}</h3>
          <p>邮箱: {{ user.email }}</p>
          <p v-if="user.age">年龄: {{ user.age }}</p>
          <small>注册时间: {{ formatDate(user.createTime) }}</small>
        </div>
        <button @click="deleteUser(user.id)">删除</button>
      </li>
    </ul>
    <p v-else>暂无用户数据</p>
  </div>
</template>

<script>
import {api} from './api.js'

export default {
  data() {
    return {
      users: [],
      formState: {
        name: '',
        email: '',
        age: undefined
      }
    }
  },
  created() {
    console.log('Initial formState:', this.formState);
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        // const data = await fetch('http://localhost:8080/rest/user/list')
        // this.users = data.json().then(data => this.users = data)
        // or
        // const data = await fetch('http://localhost:8080/rest/user/list').then(response => response.json())
        // or
        // const  data  = await fetch('https://your-api-endpoint.com/rest/user/list', {
        //   headers: {
        //     Authorization: `Bearer ${yourToken}`
        //   }
        // })
        // or
        // const response = await axios.get<User[]>('http://localhost:8080/rest/user/list', {
        // const {data} = await axios.get<User[]>('http://localhost:8080/rest/user/list', {
        const data = await api.get('/rest/user/list')
        console.log('Fetched users:', data)
        this.users = data
      } catch (error) {
        this.handleApiError(error)
      }
    },
    async createUser() {
      console.log('createUser 被调用')
      console.log('Current formState:', this.formState);
      if (!this.validateForm()) {
        console.warn('表单验证未通过')
        return
      }

      try {
        const data = await api.post('/rest/user/add', this.formState)
        this.users.push(data)
        this.resetForm()
      } catch (error) {
        this.handleApiError(error)
      }
    },
    async deleteUser(id) {
      try {
        await api.delete(`/rest/user/delete/${id}`)
        this.users = this.users.filter(user => user.id !== id)
      } catch (error) {
        this.handleApiError(error)
      }
    },
    validateForm() {
      console.log('validateForm - formState:', this.formState);
      return this.formState.name.length > 2 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formState.email)
    },
    formatDate(isoString) {
      return new Date(isoString).toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    },
    resetForm() {
      Object.assign(this.formState, {
        name: '',
        email: '',
        age: undefined
      })
    },
    handleApiError(error) {
      if (error.response) {
        console.error(`API Error ${error.response.status}:`, error.response.data)
      } else {
        console.error('Network Error:', error.message)
      }
    }
  }
}
</script>
<style scoped>
/* 样式保持不变 */
</style>
