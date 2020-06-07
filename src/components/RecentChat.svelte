<script>
    import { createEventDispatcher } from "svelte";
    export let recent = {}, recurrentRecentId = '', darkMode = false

    const dispatch = createEventDispatcher();

    let isActive = false;
    //let classActive = darkMode ? 'bg-black' : 'bg-gray-100'


    function onSelected() {
        isActive = true
        recent.isNew = false
        dispatch('onSelected', {
            recent: recent
        });
	}
</script>

<div on:click={onSelected} class="flex justify-between items-center p-3 {darkMode ? 'hover:bg-black' : 'hover:bg-gray-100 '} rounded-lg relative {recurrentRecentId === recent.id ? darkMode ? 'bg-black' : 'bg-gray-100' : ''}">
    <div class="w-16 h-16 relative flex flex-shrink-0">
        <img class="shadow-md rounded-full w-full h-full object-cover" src="{recent.avatar}" alt="">
        <div class="absolute bg-white p-1 rounded-full bottom-0 right-0">
            <div class="bg-green-500 rounded-full w-3 h-3"></div>
        </div>
    </div>
    <div class="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
        <p class="{recent.isNew ? 'font-bold' : ''}">{recent.fullname}</p>
        <div class="flex items-center text-sm {recent.isNew ? 'font-bold' : ''}">
            <div class="min-w-0">
                <p class="truncate">{recent.message}</p>
            </div>
            <!-- <p class="ml-2 whitespace-no-wrap">{recent.lastTime}</p> -->
        </div>
    </div>
    <div class="bg-blue-500 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
</div>