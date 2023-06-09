<script>
    import { trocarEstado } from "../Stores/estado";

    let boardOld = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
</script>

<main>
    <table>
        <tbody>
            {#each boardOld as linha}
                <tr>
                    {#each linha as coluna}
                        <td>{coluna}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</main>
<button on:click={() => trocarEstado("menu")}>Voltar</button>
