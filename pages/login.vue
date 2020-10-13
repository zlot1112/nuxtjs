<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-form @submit.prevent>
                <v-toolbar dark color="primary">
                  <v-toolbar-title>관리자 로그인</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-text-field
                    v-model="id"
                    placeholder="id를 입력하여 주세요."
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    v-model="pw"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    placeholder="패스워드를 입력하여 주세요."
                    prepend-icon="mdi-lock"
                    :type="show ? 'text' : 'password'"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login"> 로그인</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'layoutLogin',
  components: {},
  data() {
    return {
      id: '',
      pw: '',
      show: false,
    }
  },
  methods: {
    login() {
      alert('login')
    },
  },
}
</script>
