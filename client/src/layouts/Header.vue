<template>
  <header class="header">
    <div class="header-left">
      <div class="cvrse">
        cvrse
      </div>
    </div>
    <div class="header-right">
      <div class="navbar">
        <ul>
          <li>faq</li>
          <li>search</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  components: {

  }
}
</script>

<style scoped>
.header {
  padding-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cvrse {
  @apply font-curse text-3xl text-black pt-2 pl-10
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-right: 50px;
}

ul li {
  font-family: "Yeseva One", monospace;
  font-size: 1.2em;
  list-style: none;
  padding-right: 20px;
  display: inline-flex;
}
</style>