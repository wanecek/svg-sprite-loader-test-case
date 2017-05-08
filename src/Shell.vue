<template>
  <div class="shell">
    <svg :viewBox="viewBox">
      <use :xlink:href="symbolId"></use>
    </svg>
  </div>
</template>

<script>
import Arrow from './assets/arrow.svg';

console.log(Arrow);

export default {
  name: 'shell',

  data() {
    return {
      viewBox: Arrow.viewBox,
      symbolId: Arrow.symbolId,
    };
  },
};
</script>

<style lang="scss">
  html {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
  }

  .shell {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 200px;
    height: auto;
    fill: red;
  }
</style>
