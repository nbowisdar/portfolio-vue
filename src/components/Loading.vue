<script setup lang="ts">
const { onReady} = defineProps<{
  onReady: () => void
}>()

import { ref, onMounted, watch } from "vue"

const isLoading = ref(true)
const showTerminalTick = ref(true)
const textToShow = ref("")
const textAfterTerminalSign = ref('')
const textFull = ref('fmt.Println("I love pizza")')

setInterval(() => {
  showTerminalTick.value = !showTerminalTick.value
}, 500)

watch(isLoading, () => {
  if (!isLoading.value) {
    setTimeout(() => {
          textAfterTerminalSign.value = extractFromGoPrintln(textToShow.value)
    textToShow.value = ""
    }, 2000)
    setTimeout(() => {
      onReady()
    }, 4000)
  }
})

function extractFromGoPrintln(input: string): string {
  // Regular expression to match fmt.Println("...")
  const regex = /^fmt\.Println\((["'])(.*?)\1\)$/;
  
  const match = input.match(regex);
  
  if (!match) {
    throw new Error('Invalid fmt.Println format');
  }
  
  // Return the captured content (group 2)
  return match[2];
}

// Function to generate random character
const getRandomChar = () => {
  const chars = "!@#$%^&*()_+-=[]{};:,.<>?/\\"
  return chars[Math.floor(Math.random() * chars.length)]
}


onMounted(() => {
	let index = 0
	const interval = setInterval(() => {
    
  for (let i = 0; i < 5; i++) {
      textToShow.value = textToShow.value.slice(0, -1)
      textToShow.value += getRandomChar()
  }
    textToShow.value = textFull.value.slice(0, index) + textToShow.value.slice(-1)
		index++
		if (index > textFull.value.length) {
			clearInterval(interval)
      isLoading.value = false
      textToShow.value = textToShow.value.slice(0, -1)
		}
	}, 100)
})
</script>

<template>
	<div class="load-box ukrainian-flag-bg">
		<div class="load-text">
      <div class="terminal-sign">
        <div>
          <i class="fa-duotone fa-solid fa-terminal"></i>
        </div>
        <div>{{ textAfterTerminalSign }} </div>
        <div v-if="textAfterTerminalSign">
        <i class="fa-solid fa-pizza-slice"></i>
        </div>

      </div>

      <span> src/ </span>
      {{ textToShow }} 
      <span v-if="!isLoading && showTerminalTick"> | </span>
    </div>

		<div class="">
			<div class=""></div>
		</div>
	</div>
</template>

<style scoped>
.load-text {
	font-size: xx-large;
	font-weight: bold;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
	color: transparent;
	background-clip: text;
  min-width: 500px;
}

.load-box {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}


.terminal-sign {
  display: flex;
  gap: 20px;
}

.fa-pizza-slice {
  color: rgb(184, 150, 56);
}


@media (max-width: 768px) {
  .load-text {
    font-size: large;
    min-width: 300px;
    margin: auto;
  }
}

</style>
