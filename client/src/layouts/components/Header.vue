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
  font-family: Elephant, monospace;
  font-size: 1.8em;
  color: black;
  padding-left: 20px;
  padding-top: 10px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-right: 10px;
}

ul li {
  font-family: "Yeseva One", monospace;
  font-size: 1.2em;
  list-style: none;
  padding-right: 10px;
  display: inline-flex;
}
</style>