<template>
  <v-app>
      <div class="ma-12 pa-12">
        <v-card>
          <v-navigation-drawer app permanent expand-on-hover>
            <v-list>
              <v-list-item class="px-2">
                <v-list-item-avatar>
                  <v-img
                    src="https://randomuser.me/api/portraits/women/85.jpg"
                  ></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Arnaud Marconnet
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >sandra_a88@gmail.com</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
              <v-list-item link to='/carroussel'>
                <v-list-item-icon>
                  <v-icon>mdi-arrows-alt</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Users</v-list-item-title>
              </v-list-item>
              <v-list-item link to='calendar'>
                <v-list-item-icon>
                  <v-icon>mdi-calendar</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Calendar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </div>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
$primary-color: white;
$bg: black;
h1 {
  color: $primary-color;
  background-color: $bg;
}
</style>
