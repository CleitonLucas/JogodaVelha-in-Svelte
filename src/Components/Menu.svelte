<script>
import { trocarEstado } from "../Stores/estado";

</script>

<main>
    <div id="title">
        <h1>Jogo da Velha</h1>

        <button on:click={() => trocarEstado("jogar")}>Jogar</button>
        <button on:click={() => trocarEstado("sobre")}>Sobre</button>
        <button on:click={() => trocarEstado("ajuda")}>Ajuda</button>

    </div>
</main>


<style>
</style>