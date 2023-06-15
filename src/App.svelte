<script>
  import Ajuda from './Components/Ajuda.svelte';
  import Jogar from './Components/Jogar.svelte';
  import Menu from './Components/Menu.svelte'
  import Sobre from './Components/Sobre.svelte';
  import {trocarEstado, estado} from './Stores/estado'
</script>

<main>
  {#if $estado == "menu"}
    <Menu/>
    {:else if $estado == "jogar"}
    <Jogar/>
    {:else if $estado == "ajuda"}
    <Ajuda/>
    {:else if $estado == "sobre"}
    <Sobre/>
  {/if}
  
</main>

