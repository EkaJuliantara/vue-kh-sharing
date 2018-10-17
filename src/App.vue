<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <nav class="nav">
          <router-link to="/" class="nav-link">Index</router-link>
          <router-link :to="{name: 'create'}" class="nav-link">Create</router-link>
        </nav>
      </div>
    </div>    
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';

.router-link-exact-active {
  color: #0056b3;
}
</style>
