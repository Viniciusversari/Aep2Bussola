import { describe, test, expect } from '@jest/globals';
import Matemagica from './index.ts';

describe('Somatórias', () => {
    test('Deve retornar a soma de dois valores numéricos', () => {
        const matemagica = new Matemagica()

        expect(matemagica.adicao(1, 2)).toBe(3)
    })

    test('Deve retornar um erro ao tentar somar um número e uma string', () => {
        const matemagica = new Matemagica()
        expect(matemagica.adicao('oi', 1)).toBe('Você só pode realizar somas com operadores numéricos!')
    })
})