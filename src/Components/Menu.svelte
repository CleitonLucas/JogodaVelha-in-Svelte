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
  
    #title {
        text-align: center;
        color: white;
        padding: 20px;
    }

    h1 {
        font-size: 36px;
        margin-bottom: 30px;
    }

    button {
        background-color: #61dafb;
        color: #282c34;
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 20px;
        margin: 10px;
        cursor: pointer;
    }

    button:hover {
        background-color: #5bc0de;
    }
</style>
