<template>
  <div class="user-manager">
    <el-form ref="userForm" :model="formState" label-width="80px" @submit.native.prevent="onSubmit">
      <el-form-item label="姓名" prop="name" required>
        <el-input id="name" v-model="formState.name" placeholder="请输入姓名" minlength="3"/>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" required>
        <el-input id="email" v-model="formState.email" type="email" placeholder="请输入邮箱"/>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input id="age" v-model.number="formState.age" type="number" min="0" placeholder="请输入年龄"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">
          {{ formState.editingUserId ? '更新用户' : '添加用户' }}
        </el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="users" v-if="users.length" style="width: 100%">
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="email" label="邮箱"/>
      <el-table-column prop="age" label="年龄">
        <template v-slot:default="scope">
          {{ scope.row.age || '无' }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="注册时间">
        <template v-slot:default="scope">
          {{ formatDate(scope.row.createTime) }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot:default="scope">
          <div class="action-buttons">
            <el-button type="primary" @click="editUser(scope.row)">编辑</el-button>
            <el-button type="danger" @click="deleteUser(scope.row.id)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <p v-else>暂无用户数据</p>
  </div>
</template>

<script>
import { api } from './api.js'
import { Message, MessageBox } from 'element-ui'

export default {
  data () {
    return {
      users: [],
      formState: {
        name: '',
        email: '',
        age: undefined,
        editingUserId: null
      }
    }
  },
  methods: {
    async fetchUsers () {
      try {
        const data = await api.get('/rest/user/list')
        this.users = data
      } catch (error) {
        this.handleApiError(error)
      }
    },
    async createUser () {
      if (!this.validateForm()) {
        Message.warning('表单验证未通过')
        return
      }

      try {
        const data = await api.post('/rest/user/add', this.formState)
        this.users.push(data)
        this.resetForm()
        Message.success('用户添加成功')
      } catch (error) {
        this.handleApiError(error)
      }
    },
    editUser (user) {
      this.formState.name = user.name
      this.formState.email = user.email
      this.formState.age = user.age
      this.formState.editingUserId = user.id
    },
    async updateUser () {
      if (!this.validateForm()) {
        Message.warning('表单验证未通过')
        return
      }

      if (!this.formState.editingUserId) {
        Message.warning('未找到要编辑的用户')
        return
      }

      try {
        const updatedUser = await api.put(`/rest/user/update/${this.formState.editingUserId}`, {
          name: this.formState.name,
          age: this.formState.age
        })
        const index = this.users.findIndex(user => user.id === this.formState.editingUserId)
        if (index !== -1) {
          this.users.splice(index, 1, updatedUser)
        }
        this.resetForm()
        Message.success('用户更新成功')
      } catch (error) {
        this.handleApiError(error)
      }
    },
    async deleteUser (id) {
      try {
        await MessageBox.confirm('确定要删除该用户吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await api.delete(`/rest/user/delete/${id}`)
        this.users = this.users.filter(user => user.id !== id)
        Message.success('用户删除成功')
      } catch (error) {
        if (error !== 'cancel') {
          this.handleApiError(error)
        }
      }
    },
    validateForm () {
      return this.formState.name.length > 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formState.email)
    },
    formatDate (isoString) {
      if (!isoString) return '无'
      const date = new Date(isoString)
      return isNaN(date.getTime()) ? '无效日期' : date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
    },
    resetForm () {
      this.$refs.userForm.resetFields()
      Object.assign(this.formState, {
        name: '',
        email: '',
        age: undefined,
        editingUserId: null
      })
    },
    handleApiError (error) {
      if (error.response) {
        Message.error(`API Error ${error.response.status}: ${error.response.data}`)
      } else {
        Message.error(`Network Error: ${error.message}`)
      }
    },
    onSubmit () {
      if (this.formState.editingUserId) {
        this.updateUser()
      } else {
        this.createUser()
      }
    }
  },
  created () {
    this.fetchUsers()
  }
}
</script>

<style scoped>
.user-manager {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.action-buttons {
  display: flex;
  gap: 8px;
}
</style>
