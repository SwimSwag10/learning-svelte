<script>
  // import { logo } from "$lib/assets/user.svg"
  import { clickOutside } from '$lib/utils/clickOutside.js'
  import user from '$lib/assets/user.svg'

  let showDropdown = false;
  let showSettings = false;
</script>

<div class="fixed w-screen flex gap-4 items-center h-20 top-0 z-[1] bg-white border-neutral-400 border-b">
  <!-- <img src="" alt class="m-2 w-[16.875rem]" draggable="false"> -->
  <span class="font-medium text-lg border px-1 text-neutral-800 bg-neutral-200 border-neutral-200 border-4 rounded-md select-none">BETA</span>
  <div class="flex basis-full bg-red-500">
    <div class="flex ml-auto gap-4 items-center select-none">
      <div use:clickOutside on:click_outside={() => showDropdown = false} class="relative">
        <button on:click={() => showDropdown = !showDropdown} class="w-[3rem] h-[3rem] rounded-full bg-neutral-200 hover:bg-neutral-300"></button>
        {#if showDropdown}
          <div class="absolute flex flex-col top-[90%] bg-white right-0 shadow rounded-md whitespace-nowrap">
            <div class="px-8 py-2">
            </div>
            <div class="flex content-center justify-start border-neutral-400 border-b">
              <div class="w-[4rem] h-[4rem] rounded-full bg-neutral-200 hover:bg-neutral-200"><img src="$lib/assets/user.svg" alt="user"></div>
              <div class="flex flex-col content-start">
                <button on:click={() => {document.body.style.overflow = "hidden"; showSettings = true; showDropdown = false;}} class="px-8 py-2">Jennifer Doe</button>
                <button on:click={() => {document.body.style.overflow = "hidden"; showSettings = true; showDropdown = false;}} class="px-8 py-2">jenniferdoe@gmail.com</button>
              </div>
            </div>
            <button on:click={() => {document.body.style.overflow = "hidden"; showSettings = true; showDropdown = false;}} class="px-8 py-2 hover:bg-neutral-100">Privacy Policy</button>
            <button on:click={() => {document.body.style.overflow = "hidden"; showSettings = true; showDropdown = false;}} class="px-8 py-2 hover:bg-neutral-100">Sign Out</button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>