<script>
import { trocarestado } from "../Stores/estado.js";


</script>

<main>
    <div id="title">
        <h1>Jogo da Velha</h1>

        <button on:click={() => trocarestado("jogar")}>Jogar</button>
        <button on:click={() => trocarestado("sobre")}>Sobre</button>
        <button on:click={() => trocarestado("ajuda")}>Ajuda</button>

    </div>
</main>


<style>
</style>