<script>
  import { clickOutside } from '$lib/utils/clickOutside.js'
  import user from '$lib/assets/user.svg'
  import logo from '$lib/assets/accelerate-logo.png'

  let showDropdown = false;
  let showSettings = false;
</script>

<div class="fixed w-[100%] flex gap-6 items-center h-20 z-[1] px-10 bg-white border-neutral-400 border-b text-neutral-700">
  <img src="{logo}" alt="logo">
  <div class="flex justify-between items-center basis-full">
    <div class="flex gap-10 ">
      <div class="font-bold"> MyPatientCoverage</div>
      <div class="font-light">Alpha Version 1.0</div>
    </div>
    <div class="flex gap-10 align-middle">
      <button class="w-[3rem] h-[3rem] rounded-full bg-neutral-200"></button>
      <div use:clickOutside on:click_outside={() => showDropdown = false} class="relative">
        <button on:click={() => showDropdown = !showDropdown} class="w-[3rem] h-[3rem] rounded-full bg-neutral-200 hover:bg-neutral-300"></button>
        {#if showDropdown}
          <div class="absolute flex flex-col top-[90%] bg-white right-0 shadow rounded-md whitespace-nowrap">
            <div class="flex border-neutral-400 border-b p-4">
              <div class="w-[4rem] h-[4rem] rounded-full bg-neutral-200 hover:bg-neutral-200"><img src="$lib/assets/user.svg" alt="user"></div>
              <div class="grid content-center ml-4">
                <div class="text-left font-semibold">Jennifer Doe</div>
                <div class="text-left font-light">jenniferdoe@gmail.com</div>
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <button on:click={() => {document.body.style.overflow = "hidden"; showSettings = true; showDropdown = false;}} class="pl-4 text-left my-1 py-3 hover:bg-neutral-100">Privacy Policy</button>
              <button on:click={() => {document.body.style.overflow = "hidden"; showSettings = true; showDropdown = false;}} class="pl-4 text-left my-1 py-3 hover:bg-neutral-100">Sign Out</button>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>