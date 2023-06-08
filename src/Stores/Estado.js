import { writable } from "svelte/store";

export let estado = writable("menu");

export function trocarestado(novoestado){
    estado.set(novoestado)
}