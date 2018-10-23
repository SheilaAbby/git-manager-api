<template>
  <div>
    <h1>Repositories</h1>

    <div>
        <ul>
            <li v-for="(repo, index) in repositories" v-bind:key="index">
                {{ repo }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "Repositories",
  computed: {
      ...mapState([
          'repositories'
      ]),
  }


}
</script>

<style>

</style>
