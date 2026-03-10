<template>
  <div class="wrapper">
    <img alt="logo" class="logo" src="@/assets/WT Logo White.svg" width="125" height="125" />

    <div class="greetings">
        <h1 class="blue">Coming Soon...</h1>
    </div>
  </div>  
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.logo {
    margin: 10px;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}

</style>