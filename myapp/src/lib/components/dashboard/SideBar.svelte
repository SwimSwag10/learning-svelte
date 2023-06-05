<script>
    import { slide } from 'svelte/transition'
    import Content from '$lib/components/dashboard/Content.svelte'
    import Settings from '$lib/components/dashboard/Settings.svelte'

    let pageActive = "content"
</script>

<div class="flex gap-4">
    <!-- sidebar -->
    <div class="sticky top-0 flex flex-col justify-between pt-24 bg-gray-100 h-screen w-[20%]">
        <div class="flex flex-col gap-4 mx-4">
            <button on:click={() => {pageActive = 'content'}} class="bg-white rounded border border-neutral-700 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-200">Content</button>
            <button on:click={() => {pageActive = 'settings'}} class="bg-white rounded border border-neutral-700 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-200">Settings</button>
        </div>
        <div>
            <h2>Created by Justin</h2>
        </div>
    </div>
    
    <!-- content -->
    <div transition:slide class="flex flex-col gap-4 pt-24 w-[80%] h-[1000px] bg-gray-100">
        {#if pageActive === 'content'}
            <Content />
        {/if}
        {#if pageActive === 'settings'}
            <Settings />
        {/if}        
    </div>
</div>