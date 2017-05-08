<template>
  <div class="shell">
    <ul>
      <li><b>symbolId</b>: {{ symbolId }}</li>
      <li><b>viewBox</b>: {{ viewBox }}</li>
      <li><b>content</b>: {{ content }}</li>
    </ul>
  </div>
</template>

<script>
import Arrow from './assets/arrow.svg';

console.log(Arrow); // Should log SpriteSymbol<id: string, viewBox: string, content: string>

export default {
  name: 'shell',

  data() {
    return {
      viewBox: Arrow.viewBox,
      symbolId: Arrow.id,
      content: Arrow.content,
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
