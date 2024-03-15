<template>
<button popovertarget="my-styled-popover">Open styled Popover</button>

<div class="m-0 transition-all top-20 p-4 mx-auto
  starting:popover-open:translate-y-0
  transition-all
  transition-discrete
  popover-open:translate-y-40
  starting:popover-open:opacity-0
  popover-open:opacity-100
  opacity-0
  
  starting:popover-open:backdrop:bg-black
  popover-open:backdrop:bg-blue-300
  backdrop:bg-black
  backdrop:transition-all
  backdrop:transition-discrete
  " 
  popover id="my-styled-popover">Greetings, one and all! (styled popover)</div>
</template>

<style>
:root{
  background: #222;
}
</style>
