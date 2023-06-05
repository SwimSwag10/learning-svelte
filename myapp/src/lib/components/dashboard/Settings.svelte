<script>
	import { fly } from 'svelte/transition';
</script>

<div in:fly="{{ x: 300, duration: 300 }}" class="bg-blue-500">
    <h2>HELLO FROM SETTINGS</h2>
</div>