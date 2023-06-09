import { writable } from "svelte/store";

export let estado = writable("menu");

export function trocarEstado(novoestado){
    estado.set(novoestado)
}